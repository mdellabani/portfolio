import {launch} from 'puppeteer';

const RESUME_URL = process.env.RESUME_URL || 'http://localhost:3000/resume';
const PDF_OUTPUT = process.env.PDF_OUTPUT || 'public/assets/portfolio.pdf';

(async () => {
  const browser = await launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.goto(RESUME_URL, {waitUntil: 'networkidle0'});
  await page.emulateMediaType('print');

  await page.pdf({
    path: PDF_OUTPUT,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });

  console.log(`PDF generated successfully at: ${PDF_OUTPUT}`);

  await browser.close();
})();
