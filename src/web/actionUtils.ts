import { Page, Locator } from '@playwright/test';

export class ActionUtils {
  constructor(private page: Page) {}

  async clickElement(element: Locator): Promise<void> {
    await element.click();
  }

  async doubleClickElement(element: Locator): Promise<void> {
    await element.dblclick();
  }

  async rightClickElement(element: Locator): Promise<void> {
    await element.click({ button: 'right' });
  }

  async forceClickElement(element: Locator): Promise<void> {
    await element.click({ force: true });
  }

  async clickWithModifierKey(
    element: Locator,
    modifier: 'Alt' | 'Control' | 'ControlOrMeta' | 'Meta' | 'Shift'
  ): Promise<void> {
    await element.click({ modifiers: [modifier] });
  }

  async clickNthElement(elements: Locator, index: number): Promise<void> {
    await elements.nth(index).click();
  }
}
