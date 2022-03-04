const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search MSI Laptop', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await Daraz.msi().click();
        await browser.pause(500);
        await expect(browser).toHaveUrlContaining('msi');
    });
});