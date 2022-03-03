const Fulfilled = require('../pages/fulfilled.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check Cash On Delivery Payments', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await browser.pause(5000);
        const elem = await Fulfilled.service;
        await Fulfilled.fulfilled.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('FBL')
        await browser.pause(10000);
        
        
    });


   

    
});