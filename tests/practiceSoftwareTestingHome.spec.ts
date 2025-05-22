import { test, expect } from './base';

test.describe('Practice Software Testing - Main Navigation and Elements', () => {
  test.beforeEach(async ({ home }) => {
    await home.goto();
  });

  test('Homepage loads and displays correct title', async ({ home }) => {
    const title = await home.getTitle();
    expect(title).toContain('Practice Software Testing - Toolshop');
  });

  test('Navigation bar is visible', async ({ page }) => {
    expect(await page.isVisible('nav, [role="menubar"]')).toBeTruthy();
  });

  test('Sign in link is visible', async ({ page }) => {
    expect(await page.isVisible('a[href="/auth/login"]')).toBeTruthy();
  });

  test('Contact link is visible', async ({ page }) => {
    expect(await page.isVisible('a[href="/contact"]')).toBeTruthy();
  });

  test('Categories button is visible', async ({ page }) => {
    expect(await page.isVisible('a[data-test="nav-categories"]')).toBeTruthy();
  });

  test('Footer is visible', async ({ page }) => {
    expect(await page.isVisible('a[href="/privacy"]')).toBeTruthy();
  });

  test('Banner image is visible', async ({ page }) => {
    expect(await page.isVisible('img[alt="Banner"]')).toBeTruthy();
  });

  test('Sort dropdown is visible', async ({ page }) => {
    expect(await page.isVisible('select[aria-label="sort"]')).toBeTruthy();
  });

  test('Search box is visible', async ({ page }) => {
    expect(await page.isVisible('input[placeholder="Search"], input[aria-label="Search"]')).toBeTruthy();
  });

  test('Navigation links contain expected text', async ({ page }) => {
    const links = await page.$$eval('nav a, [role="menubar"] a', els => els.map(e => e.textContent?.toLowerCase() || ''));
    expect(links).toEqual(expect.arrayContaining([
      expect.stringMatching(/home/),
      expect.stringMatching(/contact/),
      expect.stringMatching(/sign in/)
    ]));
  });

  test('Clicking Sign in navigates to login page', async ({ page }) => {
    await page.click('a[href="/auth/login"]');
    await expect(page).toHaveURL(/.*\/auth\/login/);
  });

  test('Clicking Contact navigates to contact page', async ({ page }) => {
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL(/.*\/contact/);
  });
});
