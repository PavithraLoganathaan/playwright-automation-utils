import { Page, Locator } from '@playwright/test';

export class WebTableUtils {
  constructor(private page: Page) {}

  async getTable(table: Locator): Promise<Locator> {
    return table;
  }

  async getRowCount(table: Locator): Promise<number> {
    return await table.locator('tr').count();
  }

  async getColumnCount(table: Locator): Promise<number> {
    return await table.locator('tr').first().locator('td, th').count();
  }

  async getRow(table: Locator, rowIndex: number): Promise<Locator> {
    return table.locator('tr').nth(rowIndex);
  }

  async getCell(table: Locator, rowIndex: number, colIndex: number): Promise<Locator> {
    return table.locator('tr').nth(rowIndex).locator('td, th').nth(colIndex);
  }

  async getCellText(table: Locator, rowIndex: number, colIndex: number): Promise<string> {
    const cell = await this.getCell(table, rowIndex, colIndex);
    return await cell.innerText();
  }

  async getAllRows(table: Locator): Promise<Locator[]> {
    const rows = await table.locator('tr').all();
    return rows;
  }

  async getAllColumns(table: Locator, rowIndex: number): Promise<Locator[]> {
    const cols = await table.locator('tr').nth(rowIndex).locator('td, th').all();
    return cols;
  }

  async findRowByText(table: Locator, text: string): Promise<Locator | null> {
    const rows = table.locator('tr');
    const count = await rows.count();
    for (let i = 0; i < count; i++) {
      const rowText = await rows.nth(i).innerText();
      if (rowText.includes(text)) {
        return rows.nth(i);
      }
    }
    return null;
  }

  async findRowByColumnValueAndIndex(table: Locator, colIndex: number, value: string): Promise<Locator | null> {
    const rows = table.locator('tr');
    const count = await rows.count();
    for (let i = 0; i < count; i++) {
      const cellText = await rows.nth(i).locator('td, th').nth(colIndex).innerText();
      if (cellText === value) {
        return rows.nth(i);
      }
    }
    return null;
  }

  async clickButtonInRow(table: Locator, rowIndex: number, buttonSelector: string): Promise<void> {
    await table.locator('tr').nth(rowIndex).locator(buttonSelector).click();
  }

  async verifyTableData(table: Locator, expectedData: string[][]): Promise<boolean> {
    const rows = table.locator('tr');
    const rowCount = await rows.count();
    for (let i = 0; i < expectedData.length; i++) {
      const cols = rows.nth(i).locator('td, th');
      for (let j = 0; j < expectedData[i].length; j++) {
        const cellText = await cols.nth(j).innerText();
        if (cellText.trim() !== expectedData[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  async handlePagination(nextButton: Locator): Promise<void> {
    while (await nextButton.isVisible()) {
      await nextButton.click();
      await this.page.waitForTimeout(1000); // wait for table to refresh
    }
  }
 
  async handleDynamicTable(table: Locator): Promise<void> {
    const rows = table.locator('tr');
    const count = await rows.count();
    for (let i = 0; i < count; i++) {
      const rowText = await rows.nth(i).innerText();
      console.log(`Row ${i}: ${rowText}`);
    }
  }
}
