import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly dateOfBirthInput: Locator;
  readonly streetInput: Locator;
  readonly postalCodeInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly countryDropdown: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerButton: Locator;
  readonly registerError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId('first-name');
    this.lastNameInput = page.getByTestId('last-name');
    this.dateOfBirthInput = page.getByTestId('dob');
    this.streetInput = page.getByTestId('street');
    this.postalCodeInput = page.getByTestId('postal_code');
    this.cityInput = page.getByTestId('city');
    this.stateInput = page.getByTestId('state'); 
    this.countryDropdown = page.getByTestId('country');
    this.phoneInput = page.getByTestId('phone');
    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('password');
    this.registerButton = page.getByTestId('register-submit');
    this.registerError = page.getByTestId('register-error');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/auth/register');
  }

  async isFirstNameInputVisible() {
    return this.firstNameInput.isVisible();
  }

  async isEmailInputVisible() {
    return this.emailInput.isVisible();
  }

  async isPasswordInputVisible() {
    return this.passwordInput.isVisible();
  }

  async isRegisterButtonVisible() {
    return this.registerButton.isVisible();
  }

  async isCountryDropdownVisible() {
    return this.countryDropdown.isVisible();
  }

  async registerWithTestData(testUser: any) {
    await this.firstNameInput.fill(testUser.firstName);
    await this.lastNameInput.fill(testUser.lastName);
    await this.dateOfBirthInput.fill(testUser.dateOfBirth);
    await this.streetInput.fill(testUser.street);
    await this.postalCodeInput.fill(testUser.postalCode);
    await this.cityInput.fill(testUser.city);
    await this.stateInput.fill(testUser.state);
    await this.countryDropdown.selectOption({ label: testUser.country });
    await this.phoneInput.fill(testUser.phone);
    await this.emailInput.fill(testUser.email);
    await this.passwordInput.fill(testUser.password);
    await this.registerButton.click();
  }

  async registerErrorMessage() {
    return this.registerError.isVisible();
  }
}
