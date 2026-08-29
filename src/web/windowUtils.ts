import { BrowserContext, Page } from '@playwright/test';

export class WindowUtils {
  constructor(private context: BrowserContext, private parentPage: Page) {}

  // Open new tab
  async openNewTab(): Promise<Page> {
    const newPage = await this.context.newPage();
    return newPage;
  }

  // Switch to tab by index
  async switchToTab(index: number): Promise<Page | null> {
    const pages = this.context.pages();
    return pages[index] || null;
  }

  // Get all tabs
  getAllTabs(): Page[] {
    return this.context.pages();
  }

  // Switch by URL (partial match)
  async switchByUrl(urlPart: string): Promise<Page | null> {
    const pages = this.context.pages();
    return pages.find(p => p.url().includes(urlPart)) || null;
  }

  // Switch by title
  async switchByTitle(titlePart: string): Promise<Page | null> {
    for (const p of this.context.pages()) {
      const title = await p.title();
      if (title.includes(titlePart)) return p;
    }
    return null;
  }

  // Handle popup (wait for popup triggered by action)
  async handlePopup(trigger: () => Promise<void>): Promise<Page> {
    const [popup] = await Promise.all([
      this.parentPage.waitForEvent('popup'),
      trigger()
    ]);
    await popup.waitForLoadState();
    return popup;
  }

  // Close tab
  async closeTab(page: Page): Promise<void> {
    await page.close();
  }

  // Return to parent page
  getParentPage(): Page {
    return this.parentPage;
  }
}
