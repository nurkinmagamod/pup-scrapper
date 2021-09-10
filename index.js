const puppeter = require("puppeteer");
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeter.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://auto.ru/sankt-peterburg/cars/skoda/octavia/20898195/all/"
  );
  const html = await page.content();
  const $ = cheerio.load(html);
  $(".ListingItemTitle__link").each((index, element) =>
    console.log($(element).attr("href"))
  );
})();
