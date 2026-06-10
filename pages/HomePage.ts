import {Page,expect,Locator} from '@playwright/test';
export class HomePage{

    private readonly page:Page;
    //locators
    private readonly lnkRegister:Locator;
    private readonly lnkLogin:Locator;
    private readonly lnkMyAccount:Locator;
    private txtSearchbox: Locator;
    private btnSearch: Locator;


    //construtor
    constructor(page:Page){

        this.page=page;
        this.lnkRegister = page.locator("#top-links a[href*='account/register']");
        this.lnkLogin = page.getByRole('button', { name: 'Login' });
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.txtSearchbox = page.locator('input[placeholder="Search"]');
        this.btnSearch = page.locator('#search button[type="button"]');
        
        //this.txtSearchbox =page.
    }
    //action methods

      // Check if HomePage exists
    async isHomePageExists(){
        

        let title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    //click "register" link
    async clickRegister(){
        try{
            await this.lnkRegister.click();
        }catch(error){
            console.log(`Exception occured while clicking 'Register':${error}`);
            throw error;
        }
    }
    //click "Login" link
    async clickLogin(){
        try{
            await this.lnkLogin.click();
        }catch (error){
            console.log(`Exception occured while clicking 'login':${error}`);
            throw error;
        }
    }
    // Click "My Account" link
    async clickMyAccount(){
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'My Account': ${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.txtSearchbox.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }
    


    //click "searchProduct" link
    async sendIntextbox(pName:string){
        try{
            await this.txtSearchbox.fill(pName);
        }catch(error){
            console.log(`Exception occured while clicking 'searchProduct':${error}`);
            throw error;
        }
    }
    //
    async searchButton(){
        try{
            await this.txtSearchbox.click();
        }catch(error){
            console.log(`Exception occured while clicking 'searchProduct':${error}`);
            throw error;
        }
    }



    

}