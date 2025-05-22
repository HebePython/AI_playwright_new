import { test, expect } from './base';

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
});
