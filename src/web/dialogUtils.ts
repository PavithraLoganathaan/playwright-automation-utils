import { Page, Dialog } from '@playwright/test';

export class DialogUtils {
  constructor(private page: Page) {}

  // Accept alert
  async acceptAlert(): Promise<void> {
    this.page.on('dialog', async (dialog: Dialog) => {
      await dialog.accept();
    });
  }

  // Dismiss alert
  async dismissAlert(): Promise<void> {
    this.page.on('dialog', async (dialog: Dialog) => {
      await dialog.dismiss();
    });
  }

  // Get alert text
  async getAlertText(): Promise<string> {
    let message = '';
    this.page.on('dialog', async (dialog: Dialog) => {
      message = dialog.message();
      await dialog.accept();
    });
    return message;
  }

  // Handle confirmation (accept or dismiss)
  async handleConfirmation(accept: boolean = true): Promise<void> {
    this.page.on('dialog', async (dialog: Dialog) => {
      if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });
  }

  // Handle prompt (enter value or dismiss)
  async handlePrompt(value: string | null = null): Promise<void> {
    this.page.on('dialog', async (dialog: Dialog) => {
      if (value !== null) {
        await dialog.accept(value); // enter prompt value
      } else {
        await dialog.dismiss();
      }
    });
  }

  // Enter prompt value directly
  async enterPromptValue(value: string): Promise<void> {
    this.page.on('dialog', async (dialog: Dialog) => {
      await dialog.accept(value);
    });
  }
}
