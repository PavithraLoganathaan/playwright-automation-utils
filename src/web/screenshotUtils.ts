import { Page } from '@playwright/test';
export class ScreenshotUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async takePageScreenshot(path: string) {
    await this.page.screenshot({ path });
  }

  async takeElementScreenshot(selector: string, path: string) {
    await this.page.locator(selector).screenshot({ path });
  }

  async takeFullPageScreenshot(path: string) {
    await this.page.screenshot({ path, fullPage: true });
  }

  async screenshotOnFailure(path: string, condition: boolean) {
    if (!condition) {
      await this.page.screenshot({ path, fullPage: true });
    }
  }
}
