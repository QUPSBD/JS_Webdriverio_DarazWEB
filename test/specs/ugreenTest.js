const Ugreen = require('../pages/ugreen.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search UGREEN Laptop', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await Ugreen.viewMore().click();
        await Ugreen.ugreen().click();
        await expect(browser).toHaveUrlContaining('ugreen');
        await browser.pause(10000);
        
    });
});