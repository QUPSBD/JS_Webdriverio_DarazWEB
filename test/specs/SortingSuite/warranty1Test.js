const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check One Year Warranty', async () => {
        await Daraz.open();
        await browser.maximizeWindow();
       
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await browser.pause(500);

        const elem = await Daraz.SSD;
        await Daraz.oneYear.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('laptop&ppath');
        await browser.pause(500);
        
        
    });


   

    
});