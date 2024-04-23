import puppeteer from "puppeteer";

const logging = async () => {
  // Launch a headless browser instance.
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto("https://hearling.com/sessions/new");

  await page.waitForSelector("input[name=email]");

  await page.type("input[name=email]", "bookishwirus@gmail.com", {
    delay: 100,
  });

  await page.waitForSelector("input[name=password]");

  await page.type("input[name=password]", "haslo", { delay: 100 });

  await page.click("#root > div > main > section > div > form > button");
};

logging();
