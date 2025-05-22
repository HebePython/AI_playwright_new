import { test as base, expect, Page } from '@playwright/test';
import { PracticeSoftwareTestingHomePage } from '../POM/PracticeSoftwareTestingHomePage';

// Custom fixture for PracticeSoftwareTestingHomePage
export const test = base.extend<{ home: PracticeSoftwareTestingHomePage }>({
  home: async ({ page }, use) => {
    const home = new PracticeSoftwareTestingHomePage(page);
    await use(home);
  },
});

export { expect };
