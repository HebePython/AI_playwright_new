import { Page, Locator } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly streetInput: Locator;
  readonly postalCodeInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly countryInput: Locator;
  readonly currentPasswordInput: Locator;
  readonly newPasswordInput: Locator;
  readonly newPasswordConfirmInput: Locator;
  readonly updateProfileButton: Locator;
  readonly changePasswordButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId('first-name');
    this.lastNameInput = page.getByTestId('last-name');
    this.emailInput = page.getByTestId('email');
    this.phoneInput = page.getByTestId('phone');
    this.streetInput = page.getByTestId('street');
    this.postalCodeInput = page.getByTestId('postal_code');
    this.cityInput = page.getByTestId('city');
    this.stateInput = page.getByTestId('state');
    this.countryInput = page.getByTestId('country');
    this.currentPasswordInput = page.getByTestId('current-password');
    this.newPasswordInput = page.getByTestId('new-password');
    this.newPasswordConfirmInput = page.getByTestId('new-password-confirm');
    this.updateProfileButton = page.getByTestId('update-profile-submit');
    this.changePasswordButton = page.getByTestId('change-password-submit');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/account/profile');
  }
}
