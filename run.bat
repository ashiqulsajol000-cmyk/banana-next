@echo off
title BANANA A TO Z - Development Server
cd /d "%~dp0"

cls
echo ========================================================
echo               BANANA A TO Z ^| SOMPRITY A2Z
echo         Starting Local Development Server (Next.js)
echo ========================================================
echo.
echo  Website will open automatically at:
echo  --^> http://localhost:3000
echo.
echo  Press Ctrl+C anytime to stop the server.
echo ========================================================
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not found in system PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: Open the browser in the background after 2 seconds
start "" /b cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"

:: Start Next.js development server
npm run dev

if %errorlevel% neq 0 (
    echo.
    echo [Server Terminated]
    pause
)
