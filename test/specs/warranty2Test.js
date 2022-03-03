const Warranty2Year = require('../pages/warranty2.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check 2 Year Warranty', async () => {
        await SigninPage.open();
        await browser.maximizeWindow();
       
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await browser.pause(5000);

        const elem = await Warranty2Year.SSD;
        await Warranty2Year.oneYear.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('laptop&ppath');
        await browser.pause(10000);
        
        
    });


   

    
});