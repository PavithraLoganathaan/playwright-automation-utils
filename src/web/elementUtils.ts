import { Page, Locator} from '@playwright/test';

export class ElementUtils {

    constructor(private page:Page) {}

    getElementByRole(role: any, name?: string): Locator {
       return this.page.getByRole(role, { name : name });
    }


    getElementByText(text: string): Locator {
        return this.page.getByText(text);
    }

    getElementByAltText(altText: string): Locator {
        return this.page.getByAltText(altText);
    }

    getElementByLabelText(labelText: string): Locator {
        return this.page.getByLabel(labelText);
    }

    getElementByPlaceholder(placeholderText: string): Locator {
        return this.page.getByPlaceholder(placeholderText);
    }

    getElementByTestId(testId: string): Locator {
        return this.page.getByTestId(testId);
    }

    getElementByTitle(title: string): Locator {
        return this.page.getByTitle(title);
    }

    getElementByXPath(xpath: string): Locator {
        return this.page.locator(`xpath=${xpath}`);
    }

    getElementByCSS(cssSelector: string): Locator {
        return this.page.locator(cssSelector);
    }

    getElementByDynamicXpath(selector: string): Locator {
        const dynamicXpath = `xpath=${selector}`;
        return this.page.locator(dynamicXpath);
    }

    getElementByDynamicLocator(selector: string): Locator {
        return this.page.locator(selector);
    }

    



    




}