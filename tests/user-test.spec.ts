import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bottleneko.app/user');
  await expect(page.locator('#main')).toContainText('void294');
});