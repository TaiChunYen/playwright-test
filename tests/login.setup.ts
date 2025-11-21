import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://bottleneko.app/');

  await page.getByRole('button', { name: '登入' }).click();
  await page.getByRole('textbox', { name: '信箱' }).click();
  await page.getByRole('textbox', { name: '信箱' }).fill('請填入信箱');
  await page.getByRole('textbox', { name: '信箱' }).press('Tab');
  await page.getByRole('textbox', { name: '密碼' }).fill('請填入密碼');
  await page.locator('#main').getByRole('button', { name: '登入' }).click();

  await page.waitForTimeout(5000);

  await context.storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;