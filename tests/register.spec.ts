import { test, expect } from '../utils/base';
import { testUser, testUser2 } from '../utils/testData/userData';

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

  test('Register a new user with with a leaked password', async ({ register }) => {
    await register.registerWithTestData(testUser);
    await register.registerErrorMessage();
    await expect(register.registerError).toHaveText('The given password has appeared in a data leak. Please choose a different password.');
  });

  test('Register a new user with a secure password', async ({ register }) => {
    await register.registerWithTestData(testUser2);
    // Expect no error message for secure password
    await expect(register.registerError).not.toBeVisible();
    // Optionally, check for a success message or redirect here
  });

  
});
