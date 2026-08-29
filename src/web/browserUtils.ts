import { chromium, firefox, webkit, Browser, Page } from '@playwright/test';

export class BrowserUtils {
  private browser!: Browser;
  private page!: Page;

  // Generic openBrowser method
  async openBrowser(browserType: 'chromium' | 'firefox' | 'webkit', headless: boolean = false): Promise<void> {
    if (browserType === 'chromium') {
      this.browser = await chromium.launch({ headless });
    } else if (browserType === 'firefox') {
      this.browser = await firefox.launch({ headless });
    } else if (browserType === 'webkit') {
      this.browser = await webkit.launch({ headless });
    } else {
      throw new Error(`Unsupported browser type: ${browserType}`);
    }

    this.page = await this.browser.newPage();
  }

  async openURL(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // Refresh page
  async refreshPage(): Promise<void> {
    await this.page.reload();
  }

  // Go back
  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  // Go forward
  async goForward(): Promise<void> {
    await this.page.goForward();
  }

  // Close page
  async closePage(): Promise<void> {
    await this.page.close();
  }  

  // Close browser
  async closeBrowser(): Promise<void> {
    await this.browser.close();
  }

  // Get current URL
  async getCurrentURL(): Promise<string> {
    return this.page.url();
  }

  // Get page title
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
