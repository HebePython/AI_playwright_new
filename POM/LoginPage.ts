import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly googleSignInButton: Locator;
  readonly registerLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.locator('input[placeholder="Email address *"], input[type="email"]');
    this.passwordInput = this.page.locator('input[placeholder="Password *"], input[type="password"]');
    this.loginButton = this.page.locator('input[aria-label="Login"]');
    this.googleSignInButton = this.page.locator('button[aria-label="Sign in with Google"]');
    this.registerLink = this.page.locator('a:has-text("Register your account")');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/auth/login');
  }

  async isEmailInputVisible() {
    return this.page.isVisible(this.emailInput);
  }

  async isPasswordInputVisible() {
    return this.page.isVisible(this.passwordInput);
  }

  async isLoginButtonVisible() {
    return this.page.isVisible(this.loginButton);
  }

  async isGoogleSignInVisible() {
    return this.page.isVisible(this.googleSignInButton);
  }

  async isRegisterLinkVisible() {
    return this.page.isVisible(this.registerLink);
  }

  async login(email: string, password: string) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
