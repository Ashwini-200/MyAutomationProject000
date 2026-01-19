const { test, expect } = require('@playwright/test');

test('TC_REG_022 - Redirect to login when accessing dashboard without login', async ({ page }) => {

  // Step 1: Directly access dashboard
  await page.goto('https://example.com/dashboard');

  // Step 2: Verify redirect to Login page
  await expect(page).toHaveURL(/login/);
});
