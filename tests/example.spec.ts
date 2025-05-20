import { test, expect } from '@playwright/test';
import { ExamplePage } from '../POM/ExamplePage';

// Example test using POM

test('homepage has correct title', async ({ page }) => {
  const examplePage = new ExamplePage(page);
  await examplePage.goto();
  const title = await examplePage.getTitle();
  expect(title).not.toBeNull();
});
