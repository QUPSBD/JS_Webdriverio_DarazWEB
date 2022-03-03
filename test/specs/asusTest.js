const Sorting = require('../../pages/sorting.page');
const SigninPage = require('../../pages/signin.page');
const Search = require('../../pages/search.page');



describe('Daraz WebApp Searching and Sorting Testing', () => {
    it('Should Search Asus Laptop', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await Sorting.Asus.click();
        await expect(browser).toHaveUrlContaining('/asus');
        await browser.pause(10000);
    });

    
});