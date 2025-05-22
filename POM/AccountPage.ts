import { Page, Locator } from '@playwright/test';

export class AccountPage {
  readonly page: Page;
  readonly favoritesLink: Locator;
  readonly profileLink: Locator;
  readonly invoicesLink: Locator;
  readonly messagesLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.favoritesLink = page.getByTestId('nav-favorites');
    this.profileLink = page.getByTestId('nav-profile');
    this.invoicesLink = page.getByTestId('nav-invoices');
    this.messagesLink = page.getByTestId('nav-messages');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/account');
  }

  async isFavoritesVisible() {
    return this.favoritesLink.isVisible();
  }

  async isProfileVisible() {
    return this.profileLink.isVisible();
  }

  async isInvoicesVisible() {
    return this.invoicesLink.isVisible();
  }

  async isMessagesVisible() {
    return this.messagesLink.isVisible();
  }

  async clickFavorites() {
    await this.favoritesLink.click();
  }

  async clickProfile() {
    await this.profileLink.click();
  }

  async clickInvoices() {
    await this.invoicesLink.click();
  }

  async clickMessages() {
    await this.messagesLink.click();
  }
}
