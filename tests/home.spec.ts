import { test, expect } from '../utils/base';

test.describe('Practice Software Testing - Main Navigation and Elements', () => {
  test.beforeEach(async ({ home }) => {
    await home.goto();
  });

  test('Homepage loads and displays correct title', async ({ home }) => {
    const title = await home.getTitle();
    expect(title).toContain('Practice Software Testing - Toolshop');
  });

  test('Navigation bar is visible', async ({ home }) => {
    await expect(home.navBar).toBeVisible();
  });

  test('Sign in link is visible', async ({ home }) => {
    await expect(home.signInLink).toBeVisible();
  });

  test('Contact link is visible', async ({ home }) => {
    await expect(home.contactLink).toBeVisible();
  });

  test('Categories button is visible', async ({ home }) => {
    await expect(home.categoriesButton).toBeVisible();
  });

  test('Footer is visible', async ({ home }) => {
    await expect(home.footer).toBeVisible();
  });

  test('Banner image is visible', async ({ home }) => {
    await expect(home.bannerImage).toBeVisible();
  });

  test('Sort dropdown is visible', async ({ home }) => {
    await expect(home.sortDropdown).toBeVisible();
  });

  test('Search box is visible', async ({ home }) => {
    await expect(home.searchBox).toBeVisible();
  });

  test('Clicking Sign in navigates to login page', async ({ home, page }) => {
    await home.clickSignIn();
    await expect(page).toHaveURL(/.*\/auth\/login/);
  });

  test('Clicking Contact navigates to contact page', async ({ home, page }) => {
    await home.clickContact();
    await expect(page).toHaveURL(/.*\/contact/);
  });
});
