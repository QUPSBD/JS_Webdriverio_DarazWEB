const Daraz = require('../../pages/daraz.page');

describe('Daraz WebApp Testing', () => {
    it('Should Search Gaming Laptop', async () => {
        await browser.maximizeWindow();
        await Daraz.open();

        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await Daraz.gamingSelect().click();
        await browser.pause(500);
    });
});