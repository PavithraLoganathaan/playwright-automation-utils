import { Page } from '@playwright/test';

export class UtilityActions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ✅ Execute custom JavaScript in page context
  async executeJavaScript<T>(fn: () => T) {
    return await this.page.evaluate(fn);
  }

  // ✅ Get element property
  async getElementProperty(selector: string, property: string) {
    return await this.page.locator(selector).evaluate((el, prop) => (el as any)[prop], property);
  }

  // ✅ Get element bounding box
  async getElementBoundingBox(selector: string) {
    return await this.page.locator(selector).boundingBox();
  }

  // ✅ Scroll element into view
  async scrollElementIntoView(selector: string) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  // ✅ Focus element
  async focusElement(selector: string) {
    await this.page.locator(selector).focus();
  }

  // ✅ Blur element
  async blurElement(selector: string) {
    await this.page.locator(selector).evaluate(el => (el as HTMLElement).blur());
  }

  // ✅ Highlight element (temporary red border)
  async highlightElement(selector: string) {
    await this.page.locator(selector).evaluate(el => {
      (el as HTMLElement).style.border = '2px solid red';
    });
  }

  // ✅ Remove focus
  async removeFocus() {
    await this.page.evaluate(() => (document.activeElement as HTMLElement)?.blur());
  }

  // ✅ Wait for custom condition
  async waitForCondition(conditionFn: () => Promise<boolean>, timeout: number = 5000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      if (await conditionFn()) return true;
      await this.page.waitForTimeout(200);
    }
    throw new Error('Condition not met within timeout');
  }
}
