const SigninPage = require('../pages/signin.page');
const LanguageChange = require('../pages/language.page');

describe('Daraz WebApp Testing', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await SigninPage.signinBtn().click();
        await SigninPage.signin('01713086265', 'abc123');
        await browser.pause(10000);
    });

    it('Changing The Language One', async () => {
        await LanguageChange.selectLanguage().click();
    });

    it('Changing The Language in Bengali', async () => {
        await LanguageChange.changeLanguage().click();
    });
});


