const Gaming = require('../pages/Gaming.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');

describe('Daraz WebApp Testing', () => {
    it('Should Search Gaming Laptop', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();

        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await Gaming.gamingSelect().click();
        await browser.pause(5000);
    });
});