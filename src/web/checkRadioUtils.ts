import { Page, Locator } from '@playwright/test';

export class CheckRadioUtils {
  constructor(private page: Page) {}

  async checkCheckbox(element: Locator): Promise<void> {
    await element.check();
  }

  async uncheckCheckbox(element: Locator): Promise<void> {
    await element.uncheck();
  }

  async isChecked(element: Locator): Promise<boolean> {
    return await element.isChecked();
  }

  async selectRadioButton(element: Locator): Promise<void> {
    await element.check(); // radio buttons use .check()
  }

  async verifyRadioButtonSelected(element: Locator): Promise<boolean> {
    return await element.isChecked();
  }
}
