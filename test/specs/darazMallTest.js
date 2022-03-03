const DarazMall = require('../pages/darazmall.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check Daraz Mall', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await browser.pause(5000);




        const elem = await DarazMall.service;


        await DarazMall.darazMall.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('OS')
        await browser.pause(10000);
        
        
    });


   

    
});