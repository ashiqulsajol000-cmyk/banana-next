@echo off
title Deploy to Vercel - BANANA A TO Z
cd /d "%~dp0"

echo ========================================================
echo             BANANA A TO Z - Vercel Deployment
echo ========================================================
echo.
echo  Step 1: Checking login status and initiating deployment...
echo.

call npx vercel --prod

echo.
echo ========================================================
echo  Deployment script completed.
echo ========================================================
pause
