# Ultra-lightweight Zero-Dependency Local HTTP Server using .NET HttpListener
$port = 3000
$url = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host "  NOVATECH SOLUTIONS - LOCAL ENTERPRISE DEV SERVER" -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host "Server running at: $url" -ForegroundColor Yellow
    Write-Host "Press Ctrl+C in this console window to stop server." -ForegroundColor Gray
    Write-Host ""
    
    # Open default browser
    Start-Process $url

    $scriptDir = $PSScriptRoot
    if (-not $scriptDir) { $scriptDir = (Get-Location).Path }

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $relPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($relPath)) { $relPath = "index.html" }
        $filePath = Join-Path $scriptDir $relPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".jsx"  { "text/javascript; charset=utf-8" }
                ".svg"  { "image/svg+xml" }
                ".json" { "application/json" }
                ".xml"  { "application/xml" }
                ".txt"  { "text/plain" }
                default { "application/octet-stream" }
            }
            $response.ContentType = $mime
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
