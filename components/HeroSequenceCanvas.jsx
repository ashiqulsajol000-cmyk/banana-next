"use client";

import React, { useEffect, useRef } from 'react';

export default function HeroSequenceCanvas({ 
  className = "w-full h-full",
  containerId = "hero-scroll-wrapper"
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false });
    const totalFrames = 240;
    const getFrameUrl = index => `/frames/frame-${index.toString().padStart(3, '0')}.webp`;
    
    const seqImages = [];
    const seqState = { frame: 0, targetFrame: 0, currentDrawn: -1 };
    let animationFrameId;
    let isMounted = true;
    
    // Offscreen canvas for soft feathered edge blending on widescreen
    const offCanvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
    const offCtx = offCanvas ? offCanvas.getContext('2d', { alpha: true }) : null;

    const resizeCanvas = () => {
      const cw = canvas.clientWidth || window.innerWidth;
      const ch = canvas.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      const targetW = Math.round(cw * dpr);
      const targetH = Math.round(ch * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        seqState.currentDrawn = -1; // force redraw on next frame
      }
    };

    window.addEventListener("resize", resizeCanvas, { passive: true });
    resizeCanvas();

    // Load initial frame first for immediate display
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      if (!isMounted) return;
      resizeCanvas();
      drawFrame(firstImg, 0);
      seqState.currentDrawn = 0;
      animationFrameId = requestAnimationFrame(updateSeqFrame);
    };
    seqImages.push(firstImg);

    // Preload remaining frames
    for (let i = 2; i <= totalFrames; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      seqImages.push(img);
    }
    
    const handleScroll = () => {
      const wrapper = document.getElementById(containerId);
      let scrollFraction = 0;

      if (wrapper) {
        const rect = wrapper.getBoundingClientRect();
        const stickyHeight = window.innerHeight;
        const totalScroll = rect.height - stickyHeight;

        if (totalScroll > 0) {
          const scrolled = -rect.top;
          scrollFraction = Math.min(1, Math.max(0, scrolled / totalScroll));
        }
      } else {
        const scrollTop = window.scrollY;
        const maxScroll = window.innerHeight * 1.5;
        scrollFraction = Math.min(1, Math.max(0, scrollTop / maxScroll));
      }

      seqState.targetFrame = Math.round(scrollFraction * (totalFrames - 1));
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    function getBestLoadedImage(target) {
      if (seqImages[target] && seqImages[target].complete && seqImages[target].naturalWidth > 0) {
        return { img: seqImages[target], index: target };
      }
      for (let offset = 1; offset < 35; offset++) {
        const prev = target - offset;
        if (prev >= 0 && seqImages[prev] && seqImages[prev].complete && seqImages[prev].naturalWidth > 0) {
          return { img: seqImages[prev], index: prev };
        }
        const next = target + offset;
        if (next < totalFrames && seqImages[next] && seqImages[next].complete && seqImages[next].naturalWidth > 0) {
          return { img: seqImages[next], index: next };
        }
      }
      return null;
    }

    function drawFrame(img, frameIndex) {
      if (!img || !img.complete || img.naturalWidth <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      const imgW = img.naturalWidth || 1920;
      const imgH = img.naturalHeight || 1080;
      const arCanvas = cw / ch;
      const arImg = imgW / imgH;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Fit factor: 1.0 for banana tree full view (frame 0 to 18), smoothly transitioning to 0 by frame 54
      let fitFactor = 0;
      if (frameIndex <= 18) {
        fitFactor = 1.0;
      } else if (frameIndex < 54) {
        const t = 1.0 - (frameIndex - 18) / 36.0;
        fitFactor = t * t * (3 - 2 * t); // smoothstep
      }

      // If screen is tall/mobile/portrait (arCanvas <= 16:9) or user scrolled past tree stage:
      // Standard cover naturally shows 100% vertical height on mobile
      if (arCanvas <= arImg || fitFactor <= 0.001) {
        const scale = Math.max(cw / imgW, ch / imgH);
        const dw = imgW * scale;
        const dh = imgH * scale;
        const dx = (cw - dw) / 2;
        const dy = 0; // pinned to top
        ctx.drawImage(img, dx, dy, dw, dh);
        ctx.restore();
        return;
      }

      // Widescreen / Big Screen Smart Tree Fitting:
      // 1. Draw background to cover full canvas with zero white seams or gaps
      const coverScale = Math.max(cw / imgW, ch / imgH);
      const coverW = imgW * coverScale;
      const coverH = imgH * coverScale;
      const coverX = (cw - coverW) / 2;
      ctx.drawImage(img, coverX, 0, coverW, coverH);

      // 2. Tree fit scale calculation:
      // In the 1080px frame: leaf apex is at y=65, trunk base cut is at y=1010. Height = 945px.
      // Available height on screen above the bottom marquee ticker:
      const marqueeH = 54;
      const availH = Math.max(300, ch - marqueeH);
      const topPadding = 62; // leave clean clearance below navbar
      const targetTreeH = Math.max(300, availH - topPadding);
      const sFit = targetTreeH / 945.0;

      // Lerp scale between fitted tree and full cover zoom
      const s = sFit * fitFactor + coverScale * (1 - fitFactor);
      const dw = Math.round(imgW * s);
      const dh = Math.round(imgH * s);
      const dx = Math.round((cw - dw) / 2);
      const dy = Math.round((topPadding - 65 * s) * fitFactor);

      // 3. Draw centered tree with High-DPI sharpness and smooth horizontal feathering on left/right edges
      if (offCanvas && offCtx && dw > 0 && dh > 0) {
        const offW = Math.round(dw * dpr);
        const offH = Math.round(dh * dpr);

        if (offCanvas.width !== offW || offCanvas.height !== offH) {
          offCanvas.width = offW;
          offCanvas.height = offH;
        } else {
          offCtx.clearRect(0, 0, offW, offH);
        }

        offCtx.imageSmoothingEnabled = true;
        offCtx.imageSmoothingQuality = 'high';
        offCtx.drawImage(img, 0, 0, offW, offH);

        // Feather left & right edges (~160px) to seamlessly dissolve into the background
        offCtx.globalCompositeOperation = 'destination-in';
        const grad = offCtx.createLinearGradient(0, 0, offW, 0);
        const feather = Math.min(160 * dpr, offW * 0.12);
        const fRatio = feather / offW;
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(fRatio, 'rgba(0,0,0,1)');
        grad.addColorStop(1 - fRatio, 'rgba(0,0,0,1)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        offCtx.fillStyle = grad;
        offCtx.fillRect(0, 0, offW, offH);

        offCtx.globalCompositeOperation = 'source-over';

        // Blit feathered tree onto canvas over background (ctx is scaled by dpr)
        ctx.drawImage(offCanvas, dx, dy, dw, dh);
      } else {
        ctx.drawImage(img, dx, dy, dw, dh);
      }

      ctx.restore();
    }

    function updateSeqFrame() {
      if (!isMounted) return;

      const diff = seqState.targetFrame - seqState.frame;
      
      if (Math.abs(diff) > 0.01) {
        seqState.frame += diff * 0.13; // silky smooth lerp interpolation synced with scroll
      } else {
        seqState.frame = seqState.targetFrame;
      }

      const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.round(seqState.frame)));

      if (frameIndex !== seqState.currentDrawn) {
        const best = getBestLoadedImage(frameIndex);
        if (best && best.img) {
          drawFrame(best.img, frameIndex);
          seqState.currentDrawn = best.index;
        }
      }
      
      animationFrameId = requestAnimationFrame(updateSeqFrame);
    }

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [containerId]);

  return (
    <canvas 
      ref={canvasRef} 
      id="hero-scroll-canvas" 
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
