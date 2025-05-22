import { Page } from '@playwright/test';

export class PracticeSoftwareTestingHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async getTitle() {
    return this.page.title();
  }

  async isNavVisible() {
    return this.page.isVisible('nav[role="navigation"]');
  }

  async isSignInVisible() {
    return this.page.isVisible('a[href="/auth/login"]');
  }

  async isContactVisible() {
    return this.page.isVisible('a[href="/contact"]');
  }

  async isCategoriesVisible() {
    return this.page.isVisible('button[aria-label="Categories"]');
  }

  async isFooterVisible() {
    return this.page.locator('footer, text=Privacy Policy').isVisible();
  }

  async clickSignIn() {
    await this.page.click('a[href="/auth/login"]');
  }

  async clickContact() {
    await this.page.click('a[href="/contact"]');
  }

  async clickCategories() {
    await this.page.click('button[aria-label="Categories"]');
  }

  async getNavLinks() {
    return this.page.$$eval('nav[role="navigation"] a', els => els.map(e => e.textContent));
  }

  async isBannerVisible() {
    return this.page.isVisible('img[alt="Banner"]');
  }

  async isSortDropdownVisible() {
    return this.page.isVisible('select[name="sort"]');
  }

  async isSearchBoxVisible() {
    return this.page.isVisible('input[placeholder="Search"]');
  }
}
