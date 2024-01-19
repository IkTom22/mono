import { test, expect } from '@playwright/test';

test('index page has the correct elements', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/The Impact Directory/);
    await expect(page.getByRole('heading', { name: 'The Impact Directory' })).toBeVisible();
  });