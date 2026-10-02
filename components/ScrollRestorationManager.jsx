"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestorationManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Disable browser automatic scroll restoration on refresh/load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // If there is no specific hash target requested, or on fresh page load, force scroll to top
    window.scrollTo(0, 0);

    // Micro-delay to override any late browser scroll restoration
    const timer1 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);

    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 120);

    // Handle beforeunload to guarantee next refresh starts at top
    const handleBeforeUnload = () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Ensure top scroll when navigating between pages (e.g. from /about to /)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}
