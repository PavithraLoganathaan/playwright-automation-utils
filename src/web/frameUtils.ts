import { Page, Frame, Locator } from '@playwright/test';

export class FrameUtils {
  constructor(private page: Page) {}

  // Switch to frame by name or URL
  async switchToFrame(nameOrUrl: string): Promise<Frame | null> {
    const frame = this.page.frame({ name: nameOrUrl }) || this.page.frame({ url: new RegExp(nameOrUrl) });
    if (!frame) {
      console.warn(`Frame not found: ${nameOrUrl}`);
    }
    return frame;
  }

  // Find frame by name or URL
  async findFrame(nameOrUrl: string): Promise<Frame | null> {
    return this.switchToFrame(nameOrUrl);
  }

  // Find element inside a frame
  async findElementInFrame(frame: Frame, selector: string): Promise<Locator> {
    return frame.locator(selector);
  }

  // Handle nested frames (return all child frames of a given frame)
  async getChildFrames(frame: Frame): Promise<Frame[]> {
    return frame.childFrames();
  }

  // Switch between frames by name
  async switchBetweenFrames(names: string[]): Promise<Frame[]> {
    const frames: Frame[] = [];
    for (const name of names) {
      const frame = await this.switchToFrame(name);
      if (frame) frames.push(frame);
    }
    return frames;
  }
}
