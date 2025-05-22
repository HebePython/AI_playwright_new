import { Page } from '@playwright/test';

export class PracticeSoftwareTestingRegisterPage {
  readonly page: Page;
  readonly firstNameInput: string;
  readonly emailInput: string;
  readonly passwordInput: string;
  readonly registerButton: string;
  readonly countryDropdown: string;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = 'input[placeholder="First name"], input[name="firstName"]';
    this.emailInput = 'input[placeholder="Email address"], input[type="email"]';
    this.passwordInput = 'input[placeholder="Password"], input[type="password"]';
    this.registerButton = 'button:has-text("Register")';
    this.countryDropdown = 'select, [role="combobox"]';
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/auth/register');
  }

  async isFirstNameInputVisible() {
    return this.page.isVisible(this.firstNameInput);
  }

  async isEmailInputVisible() {
    return this.page.isVisible(this.emailInput);
  }

  async isPasswordInputVisible() {
    return this.page.isVisible(this.passwordInput);
  }

  async isRegisterButtonVisible() {
    return this.page.isVisible(this.registerButton);
  }

  async isCountryDropdownVisible() {
    return this.page.isVisible(this.countryDropdown);
  }

  async register(firstName: string, email: string, password: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.registerButton);
  }
}
