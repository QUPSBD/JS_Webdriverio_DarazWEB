const SigninPage = require('../pages/signin.page');
const LanguageChange = require('../pages/language.page');
const Search = require('../pages/search.page');

describe('Daraz WebApp Testing', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await SigninPage.open();
        await SigninPage.signinBtn().click();
        await SigninPage.signin('01713086265', 'abc123');
        await browser.pause(10000);
    });

    describe("Changing language",()=>{
        it('Changing The Language One', async () => {
            await LanguageChange.selectLanguage().click();
        });
    
        it('Changing The Language in Bengali', async () => {
            await LanguageChange.changeLanguage().click();
        });
    });


    describe('Searching Product', async () => {
        it('Should searching laptop by price',async () => {

                await Search.searchInput.setValue('laptop');
                await Search.searchBtn().click();

                await Search.l2h().click();
                //await dropdown.selectByIndex(0);
                await Search.selectL2H().click();
                await browser.pause(10000);
        
        });
    });

   
});


