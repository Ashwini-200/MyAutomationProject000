const { test, expect } = require('@playwright/test');

test('TC_REG_016 - Login with valid email and password', async ({ page }) => {

  // Step 1: Navigate to Login page
  await page.goto('https://example.com/login');

  // Step 2: Enter valid Email
  await page.fill('#email', 'kbashwini450@gmail.com');

  // Step 3: Enter valid Password
  await page.fill('#password', 'ashukb@1234');

  // Step 4: Click Login button
  await page.click('#loginBtn');

  // Step 5: Verify Dashboard page
  await expect(page).toHaveURL(/dashboard/);
});
test('TC_REG_017 - Login fails with invalid password', async ({ page }) => {

  await page.goto('https://example.com/login');

  await page.fill('#email', 'kbashwini450@gmail.com');
  await page.fill('#password', 'WrongPass123');

  await page.click('#loginBtn');

  // Verify error message
  await expect(page.locator('.error-message'))
    .toBeVisible();
});
