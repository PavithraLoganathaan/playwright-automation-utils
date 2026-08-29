import {expect, test,Locator} from '@playwright/test';
import { BrowserUtils } from "../../src/web/browserUtils";
import { ElementUtils } from "../../src/web/elementUtils";
import {ActionUtils} from "../../src/web/actionUtils";

test("sample test", async({page})=>{

  const utils = new BrowserUtils(page);
  await utils.openURL("https://dd-demo-tau.vercel.app/playwright-practice.html");
  const title = await utils.getTitle();
  console.log("Page Title:", title);
  expect(title).toContain("Playwright Locator Practice Forms");  
  const elementUtils = new ElementUtils(page);
  const roleButton:Locator = await elementUtils.getElementByCSS("#role-btn")
  const actionUtils = new ActionUtils(page);
  await actionUtils.clickElement(roleButton);

  await expect(elementUtils.getElementByText("Welcome to Playwright Training!").nth(0)).toBeVisible();

  await elementUtils.getElementByPlaceholder("Enter your email").fill("email@example.com");
  await elementUtils.getElementByCSS("#label-input").fill("testuser");
  await page.waitForTimeout(6000);
})