@echo off
cd /d C:\Users\nacho\Documents\kimi\workspace\unme-premium

git add src/app/page.tsx src/app/experiencias/page.tsx
git commit -m "Fix: eliminar duplicados residuales en Home y Experiencias"
git push origin main

echo.
echo Push completado. Revisa Vercel.
pause
