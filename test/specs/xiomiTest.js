const Xiomi = require('../pages/xiomi.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search Xiaomi Laptop', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await Xiomi.viewMore().click();
        await Xiomi.xiomi().click();
        await expect(browser).toHaveUrlContaining('xiaomi');
        await browser.pause(10000);
        
    });
});