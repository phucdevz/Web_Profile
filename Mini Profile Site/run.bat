@echo off
title Start Vite + React + TypeScript + Tailwind + shadcn-ui Project
color 0A

echo ======================
echo   Starting Project
echo ----------------------
echo  Project stack:
echo      - Vite
echo      - TypeScript
echo      - React
echo      - Tailwind CSS
echo      - shadcn-ui
echo ------------------------------------------------------------
echo  Copyright (c) 2025 by Truong Phuc
echo  All rights reserved.
echo  https://github.com/phucdevz (Cho minh xin 1 sao hihi)
echo ============================================================
echo.

REM Check if node_modules exists
IF EXIST node_modules (
    echo  Dependencies already installed.
) ELSE (
    echo  Installing dependencies...
    call npm install
)

echo 🔧 Running development server...
call npm run dev

pause
