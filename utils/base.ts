import { test as base, expect, Page } from '@playwright/test';
import { HomePage } from '../POM/HomePage';
import { LoginPage } from '../POM/LoginPage';
import { RegisterPage } from '../POM/RegisterPage';
import { AccountPage } from '../POM/AccountPage';
import { ProfilePage } from '../POM/ProfilePage';

export const test = base.extend<{
  home: HomePage,
  login: LoginPage,
  register: RegisterPage,
  account: AccountPage,
  profile: ProfilePage
}>({
  home: async ({ page }, use) => {
    const home = new HomePage(page);
    await use(home);
  },
  login: async ({ page }, use) => {
    const login = new LoginPage(page);
    await use(login);
  },
  register: async ({ page }, use) => {
    const register = new RegisterPage(page);
    await use(register);
  },
  account: async ({ page }, use) => {
    const account = new AccountPage(page);
    await use(account);
  },
  profile: async ({ page }, use) => {
    const profile = new ProfilePage(page);
    await use(profile);
  },
});

export { expect };
