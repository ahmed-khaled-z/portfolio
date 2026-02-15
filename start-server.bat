@echo off
echo ====================================
echo   Portfolio Local Server
echo ====================================
echo.
echo Starting web server on http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ====================================
echo.

cd /d "%~dp0"

REM Try Python 3 first
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using Python 3...
    echo.
    echo Open your browser to: http://localhost:8000
    echo.
    python -m http.server 8000
    goto :end
)

REM Try Python 2
python2 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using Python 2...
    echo.
    echo Open your browser to: http://localhost:8000
    echo.
    python2 -m SimpleHTTPServer 8000
    goto :end
)

REM Try py launcher
py --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using py launcher...
    echo.
    echo Open your browser to: http://localhost:8000
    echo.
    py -m http.server 8000
    goto :end
)

echo ERROR: Python is not installed or not in PATH
echo.
echo Please install Python from: https://www.python.org/downloads/
echo Or use another method from QUICKSTART.md
echo.
pause

:end
