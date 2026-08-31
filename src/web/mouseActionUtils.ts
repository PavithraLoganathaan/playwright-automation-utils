import { Page } from '@playwright/test';

export class MouseUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //  Mouse click
  async mouseClick(x: number, y: number) {
    await this.page.mouse.click(x, y);
  }

  // Mouse double click
  async mouseDoubleClick(x: number, y: number) {
    await this.page.mouse.dblclick(x, y);
  }

  //  Mouse move
  async mouseMove(x: number, y: number) {
    await this.page.mouse.move(x, y);
  }

  //  Mouse hover (element-based)
  async mouseHover(selector: string) {
    await this.page.locator(selector).hover();
  }

  //  Mouse down
  async mouseDown() {
    await this.page.mouse.down();
  }

  //  Mouse up
  async mouseUp() {
    await this.page.mouse.up();
  }

  //  Mouse wheel
  async mouseWheel(deltaX: number, deltaY: number) {
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  //  Mouse drag (manual)
  async mouseDrag(startX: number, startY: number, endX: number, endY: number) {
    await this.page.mouse.move(startX, startY);
    await this.page.mouse.down();
    await this.page.mouse.move(endX, endY);
    await this.page.mouse.up();
  }

  //  Mouse drag and drop (element-based)
  async mouseDragAndDrop(sourceSelector: string, targetSelector: string) {
    const source = this.page.locator(sourceSelector);
    const target = this.page.locator(targetSelector);
    await source.dragTo(target);
  }
}
