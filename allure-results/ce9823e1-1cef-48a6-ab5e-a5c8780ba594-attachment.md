# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User registration test @master @sanity @regression
- Location: tests\AccountRegistration.spec.ts:42:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#top-links a[href*=\'account/register\']')
    - locator resolved to <a href="https://naveenautomationlabs.com/opencart/index.php?route=account/register">Register</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    103 × waiting for element to be visible, enabled and stable
        - element is not visible
      - retrying click action
        - waiting 500ms

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Account Registration
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to application URL 
  8  |  * 2) Go to 'My Account' and click 'Register'
  9  |  * 3) Fill in registration details with random data
  10 |  * 4) Agree to Privacy Policy and submit the form
  11 |  * 5) Validate the confirmation message
  12 |  */
  13 | 
  14 | import { test, expect } from '@playwright/test';
  15 | import { HomePage } from '../pages/HomePage';
  16 | import { RegistrationPage } from '../pages/RegistrationPage';
  17 | import { RandomDataUtil } from '../utils/randomDataGenerator';
  18 | import { TestConfig } from '../test.config';
  19 | 
  20 | let homePage: HomePage;
  21 | let registrationPage: RegistrationPage;
  22 | let config: TestConfig;
  23 | 
  24 | test.beforeEach(async ({ page }) => {
  25 |     config = new TestConfig();
  26 |     await page.goto(config.appUrl); //Navigate to application URL 
  27 |     await page.waitForTimeout(8000);
  28 |     homePage = new HomePage(page);
  29 |     registrationPage = new RegistrationPage(page);
  30 | 
  31 | })
  32 | 
  33 | 
  34 | test.afterEach(async ({ page }) => {
  35 | 
> 36 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  37 |     await page.close();
  38 | 
  39 | })
  40 | 
  41 | 
  42 | test('User registration test @master @sanity @regression', async () => {
  43 | 
  44 |     //Go to 'My Account' and click 'Register'
  45 | 
  46 |     //await homePage.clickMyAccount();
  47 |     await homePage.clickRegister();
  48 | 
  49 |     //Fill in registration details with random data
  50 |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  51 |     await registrationPage.setLastName(RandomDataUtil.getLastName());
  52 |     await registrationPage.setEmail(RandomDataUtil.getEmail());
  53 |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  54 | 
  55 |     const password = RandomDataUtil.getPassword();
  56 |     await registrationPage.setPassword(password);
  57 |     await registrationPage.setConfirmPassword(password);
  58 | 
  59 |     await registrationPage.setPrivacyPolicy();
  60 |     await registrationPage.clickContinue();
  61 | 
  62 |     //Validate the confirmation message
  63 | 
  64 |     const confirmationMsg = await registrationPage.getConfirmationMsg();
  65 |     expect(confirmationMsg).toContain('Your Account Has Been Created!')
  66 | 
  67 | 
  68 | })
  69 | 
```