@echo off
REM Serves the app on http://localhost:8000 (needs Python). Close this window to stop.
start "" http://localhost:8000
python -m http.server 8000
