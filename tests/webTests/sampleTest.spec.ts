import {expect, test,Locator} from '@playwright/test';
import { BrowserUtils } from "../../src/web/browserUtils";
import { ElementUtils } from "../../src/web/elementUtils";


test("BrowserUtils launches browser and navigates", async () => {
  const utils = new BrowserUtils();
// Accessing the private page property for ElementUtils

  // Launch browser + context + page
  await utils.openBrowser('chromium', false);

  // Navigate
  await utils.openURL("https://automationexercise.com/");

  // Verify title
  const title = await utils.getPageTitle();
  console.log("Page Title:", title);
  expect(title).toContain("Automation Exercise");
  const elementUtils = new ElementUtils(utils['page']); 

  await elementUtils.getElementByRole('button', 'Test Cases').click();

  // Cleanup
  await utils.closeBrowser();
})


