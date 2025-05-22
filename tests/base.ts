import { test as base, expect, Page } from '@playwright/test';
import { PracticeSoftwareTestingHomePage } from '../POM/PracticeSoftwareTestingHomePage';
import { PracticeSoftwareTestingLoginPage } from '../POM/PracticeSoftwareTestingLoginPage';
import { PracticeSoftwareTestingRegisterPage } from '../POM/PracticeSoftwareTestingRegisterPage';

// Custom fixture for PracticeSoftwareTestingHomePage
export const test = base.extend<{
  home: PracticeSoftwareTestingHomePage,
  login: PracticeSoftwareTestingLoginPage,
  register: PracticeSoftwareTestingRegisterPage
}>({
  home: async ({ page }, use) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await use(home);
  },
  login: async ({ page }, use) => {
    const login = new PracticeSoftwareTestingLoginPage(page);
    await use(login);
  },
  register: async ({ page }, use) => {
    const register = new PracticeSoftwareTestingRegisterPage(page);
    await use(register);
  },
});

export { expect };
