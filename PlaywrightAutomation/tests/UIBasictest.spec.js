const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser})=>
 {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const password = page.locator('[type="password"]');
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.type("rahulshetty");
    await password.type('learning');
    await signIn.click();
    await page.locator("[style*='block']").textContent();
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
//race condition
    await Promise.all(
        [
             page.waitForNavigation(),
             signIn.click(),
        ]
    );
 
    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.nth(0).textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});

test('UI Controls test', async ({page})=>
 {
    // const context = await browser.newContext();
    // const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const password = page.locator('[type="password"]');
    const dropdown = page.locator("select.form-control");
    const radiobtn = page.locator(".radiotextsty");
    const documentLink = page.locator("[href*='documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await dropdown.selectOption("consult");
    await radiobtn.last().click();
    await page.locator("#okayBtn").click();
    //esertions
    console.log(await radiobtn.last().isChecked());
    await expect(radiobtn.last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    expect(await page.locator("#terms").isChecked()).toBeTruthy();
    await expect( documentLink).toHaveAttribute("class","blinkingText");
});

test('Child windows handlings', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#username');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            documentLink.click(),
        ])
        const text = await newPage.locator(".red").textContent();
        const arrayText = text.split("@");
        const domain = arrayText[1].split(" ")[0];
        console.log(domain);
        await page.locator("#username").type(domain);
        await page.pause();
        console.log(await page.locator("#username").textContent());

})


