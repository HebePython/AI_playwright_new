import { test, expect } from '../utils/base';
import { testUser2 } from '../utils/testData/userData';

test.describe('Practice Software Testing - Profile Page', () => {
  test.beforeEach(async ({ login, register, account }) => {
    await register.goto();
    await register.registerWithTestData(testUser2);
    await login.goto();
    await login.login(testUser2.email, testUser2.password);
    await account.clickProfile();
  });

  test('All profile fields are visible', async ({ profile }) => {
    await expect(profile.firstNameInput).toBeVisible();
    await expect(profile.lastNameInput).toBeVisible();
    await expect(profile.emailInput).toBeVisible();
    await expect(profile.phoneInput).toBeVisible();
    await expect(profile.streetInput).toBeVisible();
    await expect(profile.postalCodeInput).toBeVisible();
    await expect(profile.cityInput).toBeVisible();
    await expect(profile.stateInput).toBeVisible();
    await expect(profile.countryInput).toBeVisible();
  });

  test('Update profile button is visible', async ({ profile }) => {
    await expect(profile.updateProfileButton).toBeVisible();
  });

  test('Change password fields and button are visible', async ({ profile }) => {
    await expect(profile.currentPasswordInput).toBeVisible();
    await expect(profile.newPasswordInput).toBeVisible();
    await expect(profile.newPasswordConfirmInput).toBeVisible();
    await expect(profile.changePasswordButton).toBeVisible();
  });
});
