@echo off
title Novatech Solutions Web Server
echo Starting Novatech Solutions Local Web Server...
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
