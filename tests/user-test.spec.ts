import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot();

  await testInfo.attach('screenshot', {
    body: screenshot,
    contentType: 'image/png'
  });
});

test('test', async ({ page }) => {
  await page.goto('https://bottleneko.app/user');
  await expect(page.locator('#main')).toContainText('void294');
});