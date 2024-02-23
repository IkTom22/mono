import { test, expect } from '@playwright/test';

test('can login', async ({ page }) => {
  // Subscribe to 'request' and 'response' events.
  page.on('request', request => console.log('>>', request.method(), request.url()));
  page.on('response', response => console.log('<<', response.status(), response.url()));

    await page.goto('http://localhost:3000/login');
    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/The Impact Directory/);
    // await expect(page.getByRole('heading', { name: 'The Impact Directory' })).toBeVisible();
    // await page.getByLabel('Username').fill('john');
    await page.getByTestId('login-input-email').fill('test@test.com')
    await page.getByTestId('login-input-password').fill('test123')
    await page.getByTestId('login-button-submit').click()
    await page.waitForURL('**/listings')
    await expect(page).toHaveURL('http://localhost:3000/listings');
    await expect(page.getByRole('heading', { name: 'Listings' })).toBeVisible();
    // login-input-email
  });

//   Create sign up test
test('can signup', async ({page}) => {
    await page.goto('http://localhost:3000/signup')
    await page.getByTestId('signup-input-email').fill('signuptest@test.com')
    await page.getByTestId('signup-input-password').fill('test123')
    await page.getByTestId('signup-button-submit').click()
    await page.waitForURL('**/login')
    await expect(page).toHaveURL('http://localhost:3000/login')
    await expect(page.getByRole('heading', {name:'Impact Directory'})).toBeVisible();
})
