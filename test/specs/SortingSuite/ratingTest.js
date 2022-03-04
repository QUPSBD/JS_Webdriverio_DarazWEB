const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check 5 Star Rating', async () => {
        await Daraz.open();
        await browser.maximizeWindow();
       
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await browser.pause(500);

        const elem = await Daraz.Ram;
        await Daraz.ratingStar.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('laptop&rating');
        await browser.pause(500);
        
        
    });


   

    
});