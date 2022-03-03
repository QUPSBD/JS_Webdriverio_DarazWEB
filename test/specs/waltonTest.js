const Walton = require('../pages/walton.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search Walton Computers Laptop', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();

        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await Walton.viewMore().click();
        await browser.pause(5000);
        await Walton.Walton().click();
        await expect(browser).toHaveUrlContaining('walton');
        await browser.pause(10000);
    });
});