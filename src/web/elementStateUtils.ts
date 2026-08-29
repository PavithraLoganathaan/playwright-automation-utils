import { Page, Locator } from '@playwright/test';

export class ElementStateUtils {
  constructor(private page: Page) {}

  async isVisible(element: Locator): Promise<boolean> {
    return await element.isVisible();
  }

  async isHidden(element: Locator): Promise<boolean> {
    return await element.isHidden();
  }

  async isEnabled(element: Locator): Promise<boolean> {
    return await element.isEnabled();
  }

  async isDisabled(element: Locator): Promise<boolean> {
    return await element.isDisabled();
  }

  async isEditable(element: Locator): Promise<boolean> {
    return await element.isEditable();
  }

  async isChecked(element: Locator): Promise<boolean> {
    return await element.isChecked();
  }

  async isAttached(element: Locator): Promise<boolean> {
    return await element.count()>0;
  }
}
