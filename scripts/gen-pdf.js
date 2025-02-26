import {launch} from 'puppeteer';

(async () => {
  const browser = await launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle0',
  });
  
  await page.addStyleTag({
    content: `
      /* Prevent page breaks inside the timeline section with the specific ID */
      #tech-stack {
        page-break-inside: avoid !important;
        page-break-before: avoid !important;
        page-break-after: always !important;
      }
         #skills {
        page-break-inside: avoid !important;
      }
    `,
  });
  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.remove();

    const footer = document.querySelector('#footer');
    if (footer) footer.remove();

    const contactSection = document.querySelector('#contact');
    if (contactSection) contactSection.remove();

    const portfolio = document.querySelector('#portfolio');
    if (portfolio) portfolio.remove();

    const testimonials = document.querySelector('#testimonials');
    if (testimonials) testimonials.remove();
    const body = document.body;

    body.style.backgroundColor = '#f5f5f5'; // White background, or choose another color
  });

  const pdfPath = 'portfolio.pdf';
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {top: '5mm', bottom: '5mm'},
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });

  console.log('PDF generated successfully at:', pdfPath);

  await browser.close();
})();
