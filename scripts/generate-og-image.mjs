import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

const html = `<!DOCTYPE html>
<html>
<head>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Mono:wght@400;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    width: 1200px;
    height: 630px;
    background: #f5f0e6;
    font-family: 'Space Mono', monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px solid #c9c4b2;
  }

  .card {
    width: 1100px;
    padding: 50px 60px;
    border: 3px solid #c9c4b2;
    background: #ebe6d8;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .name {
    font-family: 'Press Start 2P', monospace;
    font-size: 28px;
    color: #1a7a3a;
    letter-spacing: 2px;
  }

  .role {
    font-size: 22px;
    font-weight: 700;
    color: #b8860b;
  }

  .divider {
    height: 2px;
    background: #c9c4b2;
    width: 100%;
  }

  .description {
    font-size: 16px;
    color: #1a1a1a;
    line-height: 1.6;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tag {
    padding: 6px 14px;
    border: 2px solid #1a7a3a;
    color: #1a7a3a;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .tag.amber {
    border-color: #b8860b;
    color: #b8860b;
  }

  .tag.cyan {
    border-color: #1a8a8a;
    color: #1a8a8a;
  }

  .url {
    font-size: 13px;
    color: #555555;
    letter-spacing: 1px;
    align-self: flex-end;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="name">MAHIEDDINE DELLABANI</div>
    <div class="role">Tech Lead & Software Architect</div>
    <div class="divider"></div>
    <div class="description">
      Building high-performance Java applications, scalable distributed systems
      & real-time analytics platforms for financial services.
    </div>
    <div class="tags">
      <span class="tag">Java</span>
      <span class="tag">TypeScript</span>
      <span class="tag">Python</span>
      <span class="tag">Distributed Systems</span>
      <span class="tag">Real-Time Analytics</span>
      <span class="tag amber">FRTB</span>
      <span class="tag amber">Market Risk</span>
      <span class="tag amber">Credit Risk</span>
      <span class="tag cyan">Next.js</span>
      <span class="tag cyan">React</span>
      <span class="tag cyan">AWS</span>
      <span class="tag cyan">OpenTelemetry</span>
      <span class="tag cyan">Spring Boot</span>
      <span class="tag cyan">OLAP</span>
    </div>
    <div class="url">mdellabani.github.io/portfolio</div>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.screenshot({ path: outputPath, type: 'png' });
await browser.close();

console.log(`OG image generated at ${outputPath}`);
