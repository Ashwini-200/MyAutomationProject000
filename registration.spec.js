// TC_REG_01 - Successful user registration
// Tool: Playwright (code written only, not executed)

const { test, expect } = require('@playwright/test');

test('TC_REG_01 - Successful registration with valid details', async ({ page }) => {

  // Step 1: Navigate to Registration page
  await page.goto('https://example.com/register');

  // Step 2: Enter valid Name
  await page.fill('#name', 'Ashwini K B');

  // Step 3: Enter valid Email
  await page.fill('#email', 'kbashwini450@gmail.com');

  // Step 4: Enter valid Password
  await page.fill('#password', 'ashukb@1234');

  // Step 5: Enter Confirm Password
  await page.fill('#confirmPassword', 'ashukb@1234');

  // Step 6: Click Register button
  await page.click('#registerBtn');

  // Step 7: Verify success message
  await expect(page.locator('.success-message')).toBeVisible();

  // Step 8: Verify redirect to Login page
  await expect(page).toHaveURL(/login/);
});
test('TC_REG_05 - Registration fails with duplicate email', async ({ page }) => {

  await page.goto('https://example.com/register');

  await page.fill('#name', 'ashu@123');
  await page.fill('#email', 'anu200@gmail.com'); // already registered
  await page.fill('#password', 'Ashwini@1234');
  await page.fill('#confirmPassword', 'Ashwini@1234');

  await page.click('#registerBtn');

  // Verify error message
  await expect(page.locator('.error-message'))
    .toHaveText(/email already registered/i);
});
