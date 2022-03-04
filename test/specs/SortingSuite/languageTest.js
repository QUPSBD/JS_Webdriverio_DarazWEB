const Daraz = require('../../pages/daraz.page');

describe('Daraz WebApp Testing', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.signinBtn().click();
        await Daraz.signin('01713086265', 'abc123');
        await browser.pause(500);
    });

    it('Changing The Language One', async () => {
        await Daraz.selectLanguage().click();
    });

    it('Changing The Language in Bengali', async () => {
        await Daraz.changeLanguage().click();
    });
});


