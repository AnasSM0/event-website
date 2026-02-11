@echo off
setlocal

echo ==========================================
echo      Anas Fabrics Website Setup
echo ==========================================

REM Check if data directory exists
if not exist "data" (
    echo [ERROR] 'data' directory not found!
    echo Please ensure you are running this script from the project root.
    pause
    exit /b 1
)

echo.
echo [1/4] Creating public/gallery directory...
if not exist "public\gallery" mkdir "public\gallery"

echo.
echo [2/4] Copying images...
REM Using robocopy for robust file transfer
robocopy "data" "public\gallery" *.jpeg *.jpg /IS /IT

REM Check for robocopy errors (codes 0-7 are success/partial success)
if %ERRORLEVEL% GTR 7 (
    echo [WARNING] Robocopy encountered issues. Trying xcopy fallback...
    xcopy "data\*.jpeg" "public\gallery\" /Y /I
)

echo.
echo [3/4] Installing dependencies...
call npm install
call npm install vite-plugin-image-optimizer sharp --save-dev

echo.
echo [4/4] Building project...
call npm run build

echo.
echo ==========================================
echo      Setup and Build Complete!
echo ==========================================
echo You can now deploy the 'dist' folder.
pause
