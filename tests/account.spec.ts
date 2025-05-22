import { test, expect } from '../utils/base';
import { testUser2 } from '../utils/testData/userData';

test.describe('Practice Software Testing - Account Page', () => {
  test.beforeEach(async ({ login, register }) => {
    await register.goto();
    await register.registerWithTestData(testUser2);
    await login.goto();
    await login.login(testUser2.email, testUser2.password);
  });

  test('Favorites link is visible and clickable', async ({ account }) => {
    await expect(account.favoritesLink).toBeVisible();
    await account.clickFavorites();
    await expect(account.page).toHaveURL(/\/account\/favorites/);
  });

  test('Profile link is visible and clickable', async ({ account }) => {
    await expect(account.profileLink).toBeVisible();
    await account.clickProfile();
    await expect(account.page).toHaveURL(/\/account\/profile/);
  });

  test('Invoices link is visible and clickable', async ({ account }) => {
    await expect(account.invoicesLink).toBeVisible();
    await account.clickInvoices();
    await expect(account.page).toHaveURL(/\/account\/invoices/);
  });

  test('Messages link is visible and clickable', async ({ account }) => {
    await expect(account.messagesLink).toBeVisible();
    await account.clickMessages();
    await expect(account.page).toHaveURL(/\/account\/messages/);
  });
});
