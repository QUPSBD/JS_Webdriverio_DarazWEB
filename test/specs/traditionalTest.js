const Traditional = require('../pages/traditional.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');

describe('Daraz WebApp Testing', () => {
    it('Should Search Traditional Laptop', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();

        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await Traditional.traditionalSelect().click();
        await browser.pause(10000);
    });
});