const Rating = require('../pages/rating.page');
const SigninPage = require('../pages/signin.page');
const Search = require('../pages/search.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check 5 Star Rating', async () => {
        await SigninPage.open();
        await browser.maximizeWindow();
       
        await Search.searchInput.setValue('laptop');
        await Search.searchBtn().click();
        await browser.pause(5000);

        const elem = await Rating.Ram;
        await Rating.ratingStar.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('laptop&rating');
        await browser.pause(10000);
        
        
    });


   

    
});