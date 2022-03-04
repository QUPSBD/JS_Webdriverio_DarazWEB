const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search UGREEN Laptop', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await Daraz.viewMore().click();
        await Daraz.ugreen().click();
        await expect(browser).toHaveUrlContaining('ugreen');
        await browser.pause(500);
        
    });
});