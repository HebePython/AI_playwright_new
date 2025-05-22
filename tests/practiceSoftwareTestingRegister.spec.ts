import { test, expect } from './base';

test.describe('Practice Software Testing - Register Page', () => {
  test.beforeEach(async ({ register }) => {
    await register.goto();
  });

  test('First name, email, and password fields are visible', async ({ register }) => {
    expect(await register.isFirstNameInputVisible()).toBeTruthy();
    expect(await register.isEmailInputVisible()).toBeTruthy();
    expect(await register.isPasswordInputVisible()).toBeTruthy();
  });

  test('Register button is visible', async ({ register }) => {
    expect(await register.isRegisterButtonVisible()).toBeTruthy();
  });

  test('Country dropdown is visible', async ({ register }) => {
    expect(await register.isCountryDropdownVisible()).toBeTruthy();
  });
});
