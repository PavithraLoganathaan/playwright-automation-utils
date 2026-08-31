import { Page } from '@playwright/test';

export class BrowserStateUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getCookies() {
    return await this.page.context().cookies();
  }

  async addCookies(cookies: any[]) {
    await this.page.context().addCookies(cookies);
  }

  async clearCookies() {
    await this.page.context().clearCookies();
  }

  async getLocalStorage(key: string) {
    return await this.page.evaluate(k => localStorage.getItem(k), key);
  }

  async setLocalStorage(key: string, value: string) {
    await this.page.evaluate(([k, v]) => localStorage.setItem(k, v), [key, value]);
  }

  async getSessionStorage(key: string) {
    return await this.page.evaluate(k => sessionStorage.getItem(k), key);
  }

  async setSessionStorage(key: string, value: string) {
    await this.page.evaluate(([k, v]) => sessionStorage.setItem(k, v), [key, value]);
  }
}
