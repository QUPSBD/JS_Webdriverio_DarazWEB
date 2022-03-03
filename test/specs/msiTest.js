const MsiLaptop = require('../pages/msi.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search MSI Laptop', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await MsiLaptop.msi().click();
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('msi');
    });
});