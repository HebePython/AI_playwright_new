import { Page } from '@playwright/test';

export class PracticeSoftwareTestingLoginPage {
  readonly page: Page;
  readonly emailInput: string;
  readonly passwordInput: string;
  readonly loginButton: string;
  readonly googleSignInButton: string;
  readonly registerLink: string;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = 'input[placeholder="Email address *"], input[type="email"]';
    this.passwordInput = 'input[placeholder="Password *"], input[type="password"]';
    this.loginButton = 'input[aria-label="Login"]';
    this.googleSignInButton = 'button[aria-label="Sign in with Google"]';
    this.registerLink = 'a:has-text("Register your account")';
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
