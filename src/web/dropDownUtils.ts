import { Page, Locator } from '@playwright/test';

export class DropdownUtils {
  constructor(private page: Page) {}

  async selectByValue(element: Locator, value: string): Promise<void> {
    await element.selectOption({ value: value });
  }

  async selectByLabel(element: Locator, label: string): Promise<void> {
    await element.selectOption({ label: label });
  }

  async selectByIndex(element: Locator, index: number): Promise<void> {
    await element.selectOption({ index: index });
  }


 async getSelectedOption(element: Locator): Promise<string> {
  // Returns the text of the selected option
  const selected = await element.inputValue();
  return selected;
}

  async getAllDropdownOptions(element: Locator): Promise<string[]> {
    return await element.allTextContents();
  }

 
  async customDropdownSelection(element: Locator, optionText: string): Promise<void> {
    // For custom dropdowns built with divs/spans instead of <select>
    await element.click(); // open dropdown
    await this.page.locator(`text=${optionText}`).click(); // click option by visible text
  }
}
