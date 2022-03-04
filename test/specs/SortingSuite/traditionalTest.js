const Daraz = require('../../pages/daraz.page');

describe('Daraz WebApp Testing', () => {
    it('Should Search Traditional Laptop', async () => {
        await browser.maximizeWindow();
        await Daraz.open();

        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await Daraz.traditionalSelect().click();
        await browser.pause(500);
    });
});