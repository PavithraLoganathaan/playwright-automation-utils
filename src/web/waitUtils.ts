import { Page, Locator, Response } from '@playwright/test';

export class WaitUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //  Wait for element (any state)
  async waitForElement(element: Locator) {
    await element.waitFor();
  }

  //  Wait for element visible
  async waitForElementVisible(element: Locator) {
    await element.waitFor({ state: 'visible' });
  }

  //  Wait for element hidden
  async waitForElementHidden(element: Locator) {
    await element.waitFor({ state: 'hidden' });
  }
  
  //  Wait for element attached
  async waitForElementAttached(element: Locator) {
    await element.waitFor({ state: 'attached' });
  }

  //  Wait for element detached
  async waitForElementDetached(element: Locator) {
    await element.waitFor({ state: 'detached' });
  }

  //  Wait for page load
  async waitForPageLoad() {
    await this.page.waitForLoadState('load');
  }

  //  Wait for DOM content loaded
  async waitForDomContentLoaded() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  //  Wait for URL to match
  async waitForUrl(urlPart: string) {
    await this.page.waitForURL(new RegExp(urlPart));
  }

  //  Wait for response
  async waitForResponse(urlPart: string): Promise<Response> {
    return await this.page.waitForResponse(resp => resp.url().includes(urlPart));
  }

  // Wait for request
  async waitForRequest(urlPart: string) {
    await this.page.waitForRequest(req => req.url().includes(urlPart));
  }

  //  Wait for popup
  async waitForPopup(): Promise<Page> {
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),
      // trigger action that opens popup
    ]);
    return popup;
  }

  //  Wait for download
  async waitForDownload() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      // trigger action that starts download
    ]);
    console.log(await download.path());
  }

  //  Wait for navigation
  async waitForNavigation() {
    await this.page.waitForNavigation();
  }

  //  Wait for specific condition
  async waitForCondition(condition: () => Promise<boolean>, timeout = 5000) {
    const start = Date.now();
    while (!(await condition())) {
      if (Date.now() - start > timeout) {
        throw new Error('Condition not met within timeout');
      }
      await this.page.waitForTimeout(200); // polling interval
    }
  }
}
