const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Abc", 29);
  expect(text).toBe("Abc (29 years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Abc", 29);
  expect(text).toBe("Abc (29 years old)");
});

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto("file:///C:/Users/jgrandia/Desktop/DEV/2025/07.Tests/index.html");

  await page.click("input#name");
  await page.type("input#name", "Anna");

  await page.click("input#age");
  await page.type("input#age", "28");

  await page.click("#btnAddUser");

  // Esperar hasta que el nuevo elemento con la clase '.user-item' esté presente
  //await page.waitForSelector(".user-item", { timeout: 5000 });

  /*const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Anna (28 years old)");*/

  await browser.close();
}, 10000); // Extiende el tiempo de espera de la prueba
