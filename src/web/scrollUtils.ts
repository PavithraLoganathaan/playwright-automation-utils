import { Page } from '@playwright/test';

export class ScrollUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ✅ Scroll to a specific element
  async scrollToElement(selector: string) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  // ✅ Scroll up by pixels
  async scrollUp(pixels: number = 500) {
    await this.page.evaluate(() => window.scrollBy(0, -pixels));
  }

  // ✅ Scroll down by pixels
  async scrollDown(pixels: number = 500) {
    await this.page.evaluate(y => window.scrollBy(0, y), pixels);
  }

  // ✅ Scroll horizontally
  async scrollHorizontally(pixels: number = 200) {
    await this.page.evaluate(x => window.scrollBy(x, 0), pixels);
  }

  // ✅ Scroll to top
  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  // ✅ Scroll to bottom
  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  // ✅ Infinite scroll handling
  async infiniteScroll(step: number = 1000, delay: number = 1000, maxScrolls: number = 10) {
    for (let i = 0; i < maxScrolls; i++) {
      await this.page.evaluate(y => window.scrollBy(0, y), step);
      await this.page.waitForTimeout(delay);
    }
  }
}
