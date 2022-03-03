const Installment = require('../pages/installment.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search Installment Payments', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();


        const elem = await Installment.footer;
        await Installment.installment.click();
        await elem.scrollIntoView();

        
        await browser.pause(10000);
        await expect(browser).toHaveUrlContaining('INSTALLMENT')
        await browser.pause(10000);
        
    });


   

    
});