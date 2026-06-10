# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:30:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//a[text()=\'Register\']') resolved to 2 elements:
    1) <a href="https://naveenautomationlabs.com/opencart/index.php?route=account/register">Register</a> aka locator('#top-links').getByRole('link', { name: 'Register' })
    2) <a class="list-group-item" href="https://naveenautomationlabs.com/opencart/index.php?route=account/register">Register</a> aka locator('#column-right').getByRole('link', { name: 'Register' })

Call log:
  - waiting for locator('//a[text()=\'Register\']')

```

```
Error: page.waitForTimeout: Test ended.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [expanded] [active] [ref=e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Register" [ref=e21] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
            - listitem [ref=e22]:
              - link "Login" [ref=e23] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
        - listitem [ref=e24]:
          - link " Wish List (0)" [ref=e25] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e26]: 
            - text: Wish List (0)
        - listitem [ref=e27]:
          - link " Shopping Cart" [ref=e28] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e29]: 
            - text: Shopping Cart
        - listitem [ref=e30]:
          - link " Checkout" [ref=e31] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e32]: 
            - text: Checkout
  - banner [ref=e33]:
    - generic [ref=e35]:
      - link "naveenopencart" [ref=e38] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e39]
      - generic [ref=e41]:
        - textbox "Search" [ref=e42]
        - button "" [ref=e44] [cursor=pointer]:
          - generic [ref=e45]: 
      - button " 0 item(s) - $0.00" [ref=e48] [cursor=pointer]:
        - generic [ref=e49]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e51]:
    - generic: 
    - list [ref=e53]:
      - listitem [ref=e54]:
        - link "Desktops" [ref=e55] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e56]:
        - link "Laptops & Notebooks" [ref=e57] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e58]:
        - link "Components" [ref=e59] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e60]:
        - link "Tablets" [ref=e61] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e62]:
        - link "Software" [ref=e63] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e64]:
        - link "Phones & PDAs" [ref=e65] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e66]:
        - link "Cameras" [ref=e67] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e68]:
        - link "MP3 Players" [ref=e69] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e70]:
    - list [ref=e71]:
      - listitem [ref=e72]:
        - link "" [ref=e73] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
          - generic [ref=e74]: 
      - listitem [ref=e75]:
        - link "Account" [ref=e76] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - listitem [ref=e77]:
        - link "Login" [ref=e78] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
    - generic [ref=e79]:
      - generic [ref=e81]:
        - generic [ref=e83]:
          - heading "New Customer" [level=2] [ref=e84]
          - paragraph [ref=e85]:
            - strong [ref=e86]: Register Account
          - paragraph [ref=e87]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
          - link "Continue" [ref=e88] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
        - generic [ref=e90]:
          - heading "Returning Customer" [level=2] [ref=e91]
          - paragraph [ref=e92]:
            - strong [ref=e93]: I am a returning customer
          - generic [ref=e94]:
            - generic [ref=e95]:
              - generic [ref=e96]: E-Mail Address
              - textbox "E-Mail Address" [ref=e97]
            - generic [ref=e98]:
              - generic [ref=e99]: Password
              - textbox "Password" [ref=e100]
              - link "Forgotten Password" [ref=e101] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
            - button "Login" [ref=e102] [cursor=pointer]
      - complementary [ref=e103]:
        - generic [ref=e104]:
          - link "Login" [ref=e105] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - link "Register" [ref=e106] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
          - link "Forgotten Password" [ref=e107] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
          - link "My Account" [ref=e108] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Address Book" [ref=e109] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e110] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e111] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e112] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e113] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e114] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e115] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e116] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e117] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
  - contentinfo [ref=e118]:
    - generic [ref=e119]:
      - generic [ref=e120]:
        - generic [ref=e121]:
          - heading "Information" [level=5] [ref=e122]
          - list [ref=e123]:
            - listitem [ref=e124]:
              - link "About Us" [ref=e125] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e126]:
              - link "Delivery Information" [ref=e127] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e128]:
              - link "Privacy Policy" [ref=e129] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e130]:
              - link "Terms & Conditions" [ref=e131] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e132]:
          - heading "Customer Service" [level=5] [ref=e133]
          - list [ref=e134]:
            - listitem [ref=e135]:
              - link "Contact Us" [ref=e136] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e137]:
              - link "Returns" [ref=e138] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e139]:
              - link "Site Map" [ref=e140] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e141]:
          - heading "Extras" [level=5] [ref=e142]
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "Brands" [ref=e145] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e146]:
              - link "Gift Certificates" [ref=e147] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e148]:
              - link "Affiliate" [ref=e149] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e150]:
              - link "Specials" [ref=e151] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e152]:
          - heading "My Account" [level=5] [ref=e153]
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "My Account" [ref=e156] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e157]:
              - link "Order History" [ref=e158] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e159]:
              - link "Wish List" [ref=e160] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e161]:
              - link "Newsletter" [ref=e162] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e163]
      - paragraph [ref=e164]:
        - text: Powered By
        - link "OpenCart" [ref=e165] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: End-to-End Test on Demo E-commerce Application
  3   |  *
  4   |  * Purpose:
  5   |  * This test simulates a complete user flow on an e-commerce site.
  6   |  * 
  7   |  * Steps:
  8   |  * 1) Register a new account
  9   |  * 2) Logout after registration
  10  |  * 3) Login with the same account
  11  |  * 4) Search for a product and add it to the shopping cart
  12  |  * 5) Verify cart contents
  13  |  * 6) Attempt checkout (disabled since feature isn't available on demo site)
  14  |  */
  15  | 
  16  | import { test, expect, Page } from '@playwright/test';
  17  | import { RegistrationPage } from '../pages/RegistrationPage';
  18  | import { HomePage } from '../pages/HomePage';
  19  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  20  | import { TestConfig } from '../test.config';
  21  | import { LogoutPage } from '../pages/LogoutPage';
  22  | import { LoginPage } from '../pages/LoginPage';
  23  | import { MyAccountPage } from '../pages/MyAccountPage';
  24  | import { SearchResultsPage } from '../pages/SearchResultsPage';
  25  | import { ProductPage } from '../pages/ProductPage';
  26  | import { ShoppingCartPage } from '../pages/ShoppingCartPage';
  27  | import { CheckoutPage } from '../pages/CheckoutPage';
  28  | 
  29  | // This is the main test block that runs the entire flow
  30  | test('execute end-to-end test flow @end-to-end', async ({ page }) => {
  31  |     const config = new TestConfig();
  32  | 
  33  |     // Navigate to the application's home page
  34  |     await page.goto(config.appUrl);
  35  | 
  36  |     // Step 1: Register a new account and capture the generated email
  37  |     let registeredEmail: string = await performRegistration(page);
  38  |     console.log("✅ Registration is completed!");
  39  | 
  40  |     // Step 2: Logout after successful registration
  41  |     await performLogout(page);
  42  |     console.log("✅ Logout is completed!");
  43  | 
  44  |     // Step 3: Login with the registered email
  45  |     await performLogin(page, registeredEmail);
  46  |     console.log("✅ Login is completed!");
  47  | 
  48  |     // Step 4: Search for a product and add it to the cart
  49  |     await addProductToCart(page);
  50  |     console.log("✅ Product added to cart!");
  51  | 
  52  |     // Step 5: Verify the contents of the shopping cart
  53  |     await verifyShoppingCart(page);
  54  |     console.log("✅ Shopping cart verification completed!");
  55  | 
  56  |     // Step 6: Perform checkout (skipped for demo site)
  57  |     // await performCheckout(page);
  58  | });
  59  | 
  60  | 
  61  | // Function to register a new user account
  62  | async function performRegistration(page: Page): Promise<string> {
  63  |     const homePage = new HomePage(page);
  64  |     await homePage.clickMyAccount();       // Click "My Account" link
> 65  |     page.waitForTimeout(3000);
      |          ^ Error: page.waitForTimeout: Test ended.
  66  | 
  67  |     await homePage.clickRegister();        // Click "Register" option
  68  | 
  69  |     const registrationPage = new RegistrationPage(page);
  70  | 
  71  |     // Fill in random user details
  72  |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  73  |     await registrationPage.setLastName(RandomDataUtil.getlastName());
  74  | 
  75  |     let email: string = RandomDataUtil.getEmail();
  76  |     await registrationPage.setEmail(email);
  77  |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  78  | 
  79  |     await registrationPage.setPassword("test123");
  80  |     await registrationPage.setConfirmPassword("test123");
  81  | 
  82  |     await registrationPage.setPrivacyPolicy();  // Accept the privacy policy
  83  |     await registrationPage.clickContinue();     // Submit the registration form
  84  | 
  85  |     // Validate that the registration was successful
  86  |     const confirmationMsg = await registrationPage.getConfirmationMsg();
  87  |     expect(confirmationMsg).toContain('Your Account Has Been Created!');
  88  | 
  89  |     return email; // Return the email for later use in login
  90  | }
  91  | 
  92  | 
  93  | // Function to log out the current user
  94  | async function performLogout(page: Page) {
  95  |     const myAccountPage = new MyAccountPage(page);
  96  |     const logoutPage: LogoutPage = await myAccountPage.clickLogout();
  97  | 
  98  |     // Ensure the "Continue" button is visible
  99  |     expect(await logoutPage.isContinueButtonVisible()).toBe(true);
  100 | 
  101 |     // Click "Continue" and verify redirection to HomePage
  102 |     const homePage = await logoutPage.clickContinue();
  103 |     expect(await homePage.isHomePageExists()).toBe(true);
  104 | }
  105 | 
  106 | 
  107 | // Function to log in using the registered email
  108 | async function performLogin(page: Page, email: string) {
  109 |     const config = new TestConfig();
  110 |     await page.goto(config.appUrl);  // Reload home page
  111 | 
  112 |     const homePage = new HomePage(page);
  113 |     await homePage.clickMyAccount();
  114 |     await homePage.clickLogin();
  115 | 
  116 |     const loginPage = new LoginPage(page);
  117 |     await loginPage.login(email, "test123");  // Use the registered credentials
  118 | 
  119 |     // Verify login by checking My Account page
  120 |     const myAccountPage = new MyAccountPage(page);
  121 |     expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
  122 | }
  123 | 
  124 | 
  125 | // Function to search for a product and add it to cart
  126 | async function addProductToCart(page: Page) {
  127 |     const homePage = new HomePage(page);
  128 | 
  129 |     const config = new TestConfig();
  130 |     const productName: string = config.productName;
  131 |     const productQuantity: string = config.productQuantity;
  132 | 
  133 |     await homePage.enterProductName(productName);
  134 |     await homePage.clickSearch();  // Click on search button
  135 | 
  136 |     const searchResultsPage = new SearchResultsPage(page);
  137 | 
  138 |     // Validate search results page
  139 |     expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
  140 | 
  141 |     // Validate that the desired product exists in the results
  142 |     expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();
  143 | 
  144 |     // Select product and set quantity
  145 |     const productPage = await searchResultsPage.selectProduct(productName);
  146 |     await productPage?.setQuantity(productQuantity);
  147 |     await productPage?.addToCart();  // Add product to shopping cart
  148 | 
  149 |     await page.waitForTimeout(3000); // Wait to simulate user delay
  150 | 
  151 |     // Confirm product was added
  152 |     expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
  153 | }
  154 | 
  155 | 
  156 | // Function to verify the shopping cart details
  157 | async function verifyShoppingCart(page: Page) {
  158 |     const productPage = new ProductPage(page);
  159 | 
  160 |     // Navigate to shopping cart from product page
  161 |     await productPage.clickItemsToNavigateToCart();
  162 |     const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();
  163 | 
  164 |     console.log("🛒 Navigated to shopping cart!");
  165 | 
```