const SigninPage = require('../pages/signin.page');

describe('Daraz WebApp Testing', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await SigninPage.signinBtn().click();
        await SigninPage.signin('01713086265', 'abc123');
        await browser.pause(10000);
    });
});


