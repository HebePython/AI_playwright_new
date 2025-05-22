import { test as base, expect, Page } from '@playwright/test';
import { HomePage } from '../POM/HomePage';
import { LoginPage } from '../POM/LoginPage';
import { RegisterPage } from '../POM/RegisterPage';

export const test = base.extend<{
  home: HomePage,
  login: LoginPage,
  register: RegisterPage
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
});

export { expect };
