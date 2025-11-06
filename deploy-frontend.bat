@echo off
echo ========================================
echo   ReahBites Frontend Deployment
echo ========================================
echo.

echo Step 1: Building production bundle...
cd frontend
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Deploying to Firebase Hosting...
call firebase deploy --only hosting

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Deployment failed!
    echo Make sure you're logged in: firebase login
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Deployment Complete! 🎉
echo ========================================
echo.
echo Your app is now live!
echo Check the URL above to visit your site.
echo.
pause

