const MinMax = require('../pages/minmax.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check Min and Max', async () => {
        await SigninPage.open();
        await browser.maximizeWindow();
       
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await browser.pause(5000);

        const elem = await MinMax.price;
       // await Installment.installment.click();
       await MinMax.minandmax("10000","50000");
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('laptop&price');
        await browser.pause(10000);
        
        
    });


   

    
});