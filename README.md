# Playwright Project Structure

- `resources/` - Resource files (images, PDFs, etc.)
- `utils/` - Utility functions and helpers
  - `testData/` - Test data files
  - `locators/` - Element locator files
- `POM/` - Page Object Model classes
- `tests/` - Playwright test files
- `playwright.config.ts` - Playwright configuration

## Example Usage
- Add new POM classes in `POM/`
- Add new test files in `tests/`
- Add locators and test data in their respective folders under `utils/`

Run tests with:
```
npx playwright test
```

---

# AI_playwright_new
Learning playwright with ai/mcp and more
