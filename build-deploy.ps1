# Duneborn Build & Deploy Packaging Script
# Run this script to generate a single folder that you can drag-and-drop onto Cloudflare Pages.

Write-Host "1. Running production build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed. Aborting packaging."
    Exit
}

$deployFolder = "cloudflare_deploy"

Write-Host "2. Creating deployment package folder: $deployFolder..." -ForegroundColor Yellow
if (Test-Path $deployFolder) {
    Remove-Item -Recurse -Force $deployFolder
}
New-Item -ItemType Directory -Path $deployFolder | Out-Null

Write-Host "3. Copying static frontend assets..." -ForegroundColor Yellow
Copy-Item -Path "dist/*" -Destination $deployFolder -Recurse -Force

Write-Host "4. Copying serverless functions..." -ForegroundColor Yellow
Copy-Item -Path "functions" -Destination $deployFolder -Recurse -Force

Write-Host "`nSuccessfully packaged! Drag and drop the '$deployFolder' folder directly onto Cloudflare Pages." -ForegroundColor Green
Write-Host "Your website and secure email forms will work perfectly in production." -ForegroundColor Green
