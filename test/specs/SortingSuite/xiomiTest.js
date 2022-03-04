const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search Xiaomi Laptop', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await Daraz.viewMore().click();
        await Daraz.xiomi().click();
        await expect(browser).toHaveUrlContaining('xiaomi');
        await browser.pause(500);
        
    });
});