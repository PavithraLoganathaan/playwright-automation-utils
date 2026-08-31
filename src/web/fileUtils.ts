import { Page } from '@playwright/test';

export class FileUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Upload single file
  async uploadFile(selector: string, filePath: string) {
    await this.page.locator(selector).setInputFiles(filePath);
  }

  // Upload multiple files
  async uploadMultipleFiles(selector: string, filePaths: string[]) {
    await this.page.locator(selector).setInputFiles(filePaths);
  }

  // Download file
  async downloadFile(triggerSelector: string) {
    const [ download ] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator(triggerSelector).click()
    ]);
    return download;
  }

  // Get downloaded file name
  async getDownloadedFileName(download: any) {
    return await download.suggestedFilename();
  }

  // Save downloaded file
  async saveDownloadedFile(download: any, path: string) {
    await download.saveAs(path);
  }

  // Verify downloaded file exists
  async verifyDownloadedFile(download: any) {
    const path = await download.path();
    return path !== null;
  }
}
