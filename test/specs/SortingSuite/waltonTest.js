const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search Walton Computers Laptop', async () => {
        await browser.maximizeWindow();
        await Daraz.open();

        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await Daraz.viewMore().click();
        await browser.pause(500);
        await Daraz.Walton().click();
        await expect(browser).toHaveUrlContaining('walton');
        await browser.pause(500);
    });
});