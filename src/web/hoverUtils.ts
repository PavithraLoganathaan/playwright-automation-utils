import { Page, expect } from '@playwright/test';

export class HoverUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ✅ Hover over element
  async hoverOverElement(selector: string) {
    await this.page.locator(selector).hover();
  }

  // ✅ Hover and click submenu
  async hoverAndClickSubmenu(parentSelector: string, submenuSelector: string) {
    await this.page.locator(parentSelector).hover();
    await this.page.locator(submenuSelector).click();
  }

  // ✅ Verify tooltip appears
  async verifyTooltip(triggerSelector: string, tooltipSelector: string) {
    await this.page.locator(triggerSelector).hover();
    await expect(this.page.locator(tooltipSelector)).toBeVisible();
  }

  // ✅ Mouse movement (free coordinates)
  async mouseMove(x: number, y: number) {
    await this.page.mouse.move(x, y);
  }
}
