import { Page, expect } from '@playwright/test';

export class CommonUIUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ✅ Date Picker
  async selectDate(selector: string, date: string) {
    await this.page.locator(selector).fill(date); // format: yyyy-mm-dd
  }

  async selectDateRange(startSelector: string, endSelector: string, startDate: string, endDate: string) {
    await this.page.locator(startSelector).fill(startDate);
    await this.page.locator(endSelector).fill(endDate);
  }

  // ✅ Autocomplete
  async handleAutocomplete(inputSelector: string, text: string, optionSelector: string) {
    await this.page.locator(inputSelector).fill(text);
    await this.page.locator(optionSelector).click();
  }

  // ✅ Slider
  async moveSlider(selector: string, value: number) {
    const slider = this.page.locator(selector);
    const box = await slider.boundingBox();
    if (box) {
      const x = box.x + (box.width * value) / 100;
      const y = box.y + box.height / 2;
      await this.page.mouse.move(x, y);
      await this.page.mouse.down();
      await this.page.mouse.up();
    }
  }

  // ✅ Tooltip
  async handleTooltip(triggerSelector: string, tooltipSelector: string) {
    await this.page.locator(triggerSelector).hover();
    await expect(this.page.locator(tooltipSelector)).toBeVisible();
  }

  // ✅ Modal
  async handleModal(openSelector: string, closeSelector: string) {
    await this.page.locator(openSelector).click();
    await expect(this.page.locator(closeSelector)).toBeVisible();
    await this.page.locator(closeSelector).click();
  }

  // ✅ Popup
  async handlePopup(triggerSelector: string) {
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.locator(triggerSelector).click()
    ]);
    return popup;
  }

  // ✅ Toast Message
  async handleToastMessage(triggerSelector: string, toastSelector: string) {
    await this.page.locator(triggerSelector).click();
    await expect(this.page.locator(toastSelector)).toBeVisible();
  }

  // ✅ Loading Spinner
  async handleLoadingSpinner(spinnerSelector: string) {
    await this.page.locator(spinnerSelector).waitFor({ state: 'hidden' });
  }

  // ✅ Dynamic Content
  async handleDynamicContent(selector: string) {
    await this.page.locator(selector).waitFor({ state: 'visible' });
  }

  // ✅ Pagination
  async handlePagination(nextSelector: string, condition: () => Promise<boolean>) {
    while (await condition()) {
      await this.page.locator(nextSelector).click();
      await this.page.waitForTimeout(1000); // wait for refresh
    }
  }

  // ✅ Infinite Scrolling
  async handleInfiniteScrolling(step: number = 1000, delay: number = 1000, maxScrolls: number = 10) {
    for (let i = 0; i < maxScrolls; i++) {
      await this.page.evaluate(y => window.scrollBy(0, y), step);
      await this.page.waitForTimeout(delay);
    }
  }
}
