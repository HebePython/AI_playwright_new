import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly navBar: Locator;
  readonly signInLink: Locator;
  readonly contactLink: Locator;
  readonly categoriesButton: Locator;
  readonly footer: Locator;
  readonly bannerImage: Locator;
  readonly sortDropdown: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navBar = page.getByRole('navigation').filter({ hasText: 'Home Categories Hand' });
    this.signInLink = page.locator('a[href="/auth/login"]');
    this.contactLink = page.locator('a[href="/contact"]');
    this.categoriesButton = page.locator('a[data-test="nav-categories"], button[aria-label="Categories"]');
    this.footer = page.locator('footer, a[href="/privacy"]');
    this.bannerImage = page.locator('img[alt="Banner"]');
    this.sortDropdown = page.locator('select[aria-label="sort"], select[name="sort"]');
    this.searchBox = page.locator('input[placeholder="Search"], input[aria-label="Search"]');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async getTitle() {
    return this.page.title();
  }

  async isNavVisible() {
    return this.navBar.isVisible();
  }

  async isSignInVisible() {
    return this.signInLink.isVisible();
  }

  async isContactVisible() {
    return this.contactLink.isVisible();
  }

  async isCategoriesVisible() {
    return this.categoriesButton.isVisible();
  }

  async isFooterVisible() {
    return this.footer.isVisible();
  }

  async clickSignIn() {
    await this.signInLink.click();
  }

  async clickContact() {
    await this.contactLink.click();
  }

  async clickCategories() {
    await this.categoriesButton.click();
  }

  async isBannerVisible() {
    return this.bannerImage.isVisible();
  }

  async isSortDropdownVisible() {
    return this.sortDropdown.isVisible();
  }

  async isSearchBoxVisible() {
    return this.searchBox.isVisible();
  }
}
