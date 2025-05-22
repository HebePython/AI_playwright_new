import { test, expect } from '@playwright/test';
import { PracticeSoftwareTestingHomePage } from '../POM/PracticeSoftwareTestingHomePage';

test.describe('Practice Software Testing - Main Navigation and Elements', () => {
  test('Homepage loads and displays correct title', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    const title = await home.getTitle();
    // The actual title is 'Practice Software Testing - Toolshop - v5.0'
    expect(title).toContain('Practice Software Testing - Toolshop');
  });

  test('Navigation bar is visible', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // nav[role="navigation"] is not present, use nav or menubar
    expect(await page.isVisible('nav, [role="menubar"]')).toBeTruthy();
  });

  test('Sign in link is visible', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // The selector for sign in is 'a[href="/auth/login"]'
    expect(await page.isVisible('a[href="/auth/login"]')).toBeTruthy();
  });

  test('Contact link is visible', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // The selector for contact is 'a[href="/contact"]'
    expect(await page.isVisible('a[href="/contact"]')).toBeTruthy();
  });

  test('Categories button is visible', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // The selector for categories is 'button:has-text("Categories")'
    expect(await page.isVisible('button:has-text("Categories")')).toBeTruthy();
  });

  test('Footer is visible', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // There is no <footer>, but there is always a paragraph with Privacy Policy link at the bottom
    expect(await page.isVisible('a[href="/privacy"]')).toBeTruthy();
  });

  test('Banner image is visible', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // The banner image has alt="Banner"
    expect(await page.isVisible('img[alt="Banner"]')).toBeTruthy();
  });

  test('Sort dropdown is visible', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // The sort dropdown is a combobox with label 'sort'
    expect(await page.isVisible('select[name="sort"], [role="combobox"]')).toBeTruthy();
  });

  test('Search box is visible', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // The search box is a textbox with label 'Search'
    expect(await page.isVisible('input[placeholder="Search"], input[aria-label="Search"]')).toBeTruthy();
  });

  test('Navigation links contain expected text', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    // Get all nav links
    const links = await page.$$eval('nav a, [role="menubar"] a', els => els.map(e => e.textContent?.toLowerCase() || ''));
    expect(links).toEqual(expect.arrayContaining([
      expect.stringMatching(/home/),
      expect.stringMatching(/contact/),
      expect.stringMatching(/sign in/)
    ]));
  });

  test('Clicking Sign in navigates to login page', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    await page.click('a[href="/auth/login"]');
    await expect(page).toHaveURL(/.*\/auth\/login/);
  });

  test('Clicking Contact navigates to contact page', async ({ page }) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await home.goto();
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL(/.*\/contact/);
  });
});
