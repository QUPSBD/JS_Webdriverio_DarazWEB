const FreeShiping = require('../pages/freeshiping.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check  Free Shipping', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await browser.pause(5000);




        const elem = await FreeShiping.service;


        await FreeShiping.freeshiping.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('FS')
        await browser.pause(10000);
        
        
    });


   

    
});