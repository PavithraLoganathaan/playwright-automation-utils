import { Page } from '@playwright/test';

export class KeyboardUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ✅ Press a single key
  async pressKey(key: string) {
    await this.page.keyboard.press(key);
  }

  // ✅ Type text using keyboard
  async typeText(text: string) {
    await this.page.keyboard.type(text);
  }

  // ✅ Key down
  async keyDown(key: string) {
    await this.page.keyboard.down(key);
  }

  // ✅ Key up
  async keyUp(key: string) {
    await this.page.keyboard.up(key);
  }

  // ✅ Enter
  async pressEnter() {
    await this.page.keyboard.press('Enter');
  }

  // ✅ Tab
  async pressTab() {
    await this.page.keyboard.press('Tab');
  }

  // ✅ Escape
  async pressEscape() {
    await this.page.keyboard.press('Escape');
  }

  // ✅ Ctrl/Cmd + A (Select All)
  async pressSelectAll(isMac: boolean = false) {
    const modifier = isMac ? 'Meta' : 'Control';
    await this.page.keyboard.down(modifier);
    await this.page.keyboard.press('A');
    await this.page.keyboard.up(modifier);
  }

  // ✅ Ctrl/Cmd + C (Copy)
  async pressCopy(isMac: boolean = false) {
    const modifier = isMac ? 'Meta' : 'Control';
    await this.page.keyboard.down(modifier);
    await this.page.keyboard.press('C');
    await this.page.keyboard.up(modifier);
  }

  // ✅ Ctrl/Cmd + V (Paste)
  async pressPaste(isMac: boolean = false) {
    const modifier = isMac ? 'Meta' : 'Control';
    await this.page.keyboard.down(modifier);
    await this.page.keyboard.press('V');
    await this.page.keyboard.up(modifier);
  }

  // ✅ Arrow keys
  async pressArrowUp() {
    await this.page.keyboard.press('ArrowUp');
  }

  async pressArrowDown() {
    await this.page.keyboard.press('ArrowDown');
  }

  async pressArrowLeft() {
    await this.page.keyboard.press('ArrowLeft');
  }

  async pressArrowRight() {
    await this.page.keyboard.press('ArrowRight');
  }
}
