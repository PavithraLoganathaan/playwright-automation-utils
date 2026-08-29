import { Page, Locator } from '@playwright/test';

export class TextUtils {
  constructor(private page: Page) {}

  async fillText(element: Locator, text: string): Promise<void> {
    await element.fill(text);
  }

  async clearText(element: Locator): Promise<void> {
    await element.clear();
  }

  async typeText(element: Locator, text: string): Promise<void> {
    await element.type(text);
  }

  async pressKey(element: Locator, key: string): Promise<void> {
    await element.press(key);
  }

  async getInnerText(element: Locator): Promise<string> {
    return await element.innerText();
  }

  async getTextContent(element: Locator): Promise<string | null> {
    return await element.textContent();
  }

  async getInputValue(element: Locator): Promise<string> {
    return await element.inputValue();
  }


  async getAttribute(element: Locator, attributeName: string): Promise<string | null> {
    return await element.getAttribute(attributeName);
  }

  async getElementCount(elements: Locator): Promise<number> {
    return await elements.count();
  }
}
