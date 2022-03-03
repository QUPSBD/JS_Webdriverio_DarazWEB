const Sorting = require('../pages/sorting.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search HP  Laptop', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();

        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await Sorting.viewMore().click();
        await browser.pause(5000);
        await Sorting.hp().click();
        await expect(browser).toHaveUrlContaining('hp');
        await browser.pause(10000);
    });
});