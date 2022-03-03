const Warranty1Year = require('../pages/warranty1.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check One Year Warranty', async () => {
        await SigninPage.open();
        await browser.maximizeWindow();
       
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await browser.pause(5000);

        const elem = await Warranty1Year.SSD;
        await Warranty1Year.oneYear.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('laptop&ppath');
        await browser.pause(10000);
        
        
    });


   

    
});