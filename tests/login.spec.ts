import { test, expect } from './base';
import { testUser2 } from '../utils/testData/userData';

test.describe('Practice Software Testing - Login Page', () => {
  test.beforeEach(async ({ login }) => {
    await login.goto();
  });

  test('Email and password fields are visible', async ({ login }) => {
    expect(await login.isEmailInputVisible()).toBeTruthy();
    expect(await login.isPasswordInputVisible()).toBeTruthy();
  });

  test('Login and Google sign-in buttons are visible', async ({ login }) => {
    expect(await login.isLoginButtonVisible()).toBeTruthy();
    expect(await login.isGoogleSignInVisible()).toBeTruthy();
  });

  test('Register link is visible', async ({ login }) => {
    expect(await login.isRegisterLinkVisible()).toBeTruthy();
  });

  test('Login with valid credentials (testUser2)', async ({ login }) => {
    await login.login(testUser2.email, testUser2.password);
    // Example: Check for a successful login indicator, such as a user profile or logout button
    await expect(login.page.locator('a[data-test="nav-profile"], button[data-test="logout"]')).toBeVisible();
  });
});
