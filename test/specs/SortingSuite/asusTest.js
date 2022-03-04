const Daraz = require('../../pages/daraz.page');




describe('Daraz WebApp Searching and Sorting Testing', () => {
    it('Should Display Asus Laptop', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await Daraz.Asus.apply().click();
        await expect(browser).toHaveUrlContaining('/asus');
        await browser.pause(500);
    });

    
});