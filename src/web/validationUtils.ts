import { Page, expect } from '@playwright/test';

export class ValidationUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ✅ Verify element visible
  async verifyElementVisible(selector: string) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  // ✅ Verify element hidden
  async verifyElementHidden(selector: string) {
    await expect(this.page.locator(selector)).toBeHidden();
  }

  // ✅ Verify exact text
  async verifyText(selector: string, expectedText: string) {
    await expect(this.page.locator(selector)).toHaveText(expectedText);
  }

  // ✅ Verify partial text
  async verifyPartialText(selector: string, partialText: string) {
    await expect(this.page.locator(selector)).toContainText(partialText);
  }

  // ✅ Verify attribute
  async verifyAttribute(selector: string, attribute: string, expectedValue: string) {
    await expect(this.page.locator(selector)).toHaveAttribute(attribute, expectedValue);
  }

  // ✅ Verify input value
  async verifyValue(selector: string, expectedValue: string) {
    await expect(this.page.locator(selector)).toHaveValue(expectedValue);
  }

  // ✅ Verify URL
  async verifyURL(expectedURL: string) {
    await expect(this.page).toHaveURL(expectedURL);
  }

  // ✅ Verify Title
  async verifyTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  // ✅ Verify element count
  async verifyElementCount(selector: string, expectedCount: number) {
    await expect(this.page.locator(selector)).toHaveCount(expectedCount);
  }

  // ✅ Verify checkbox state
  async verifyCheckboxState(selector: string, checked: boolean) {
    if (checked) {
      await expect(this.page.locator(selector)).toBeChecked();
    } else {
      await expect(this.page.locator(selector)).not.toBeChecked();
    }
  }

  // ✅ Verify enabled/disabled
  async verifyEnabled(selector: string) {
    await expect(this.page.locator(selector)).toBeEnabled();
  }

  async verifyDisabled(selector: string) {
    await expect(this.page.locator(selector)).toBeDisabled();
  }

  // ✅ Verify selected option in dropdown
  async verifySelectedOption(selector: string, expectedValue: string) {
    await expect(this.page.locator(selector)).toHaveValue(expectedValue);
  }
}
