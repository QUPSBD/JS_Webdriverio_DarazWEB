const Daraz = require('../../pages/daraz.page')



describe('Daraz WebApp Testing', () => {
    it('Should Display Fulfilled Laptop', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await browser.pause(500);
        const elem = await Daraz.service;
        await Daraz.fulfilled.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('FBL')
        await browser.pause(500);
        
        
    });


   

    
});