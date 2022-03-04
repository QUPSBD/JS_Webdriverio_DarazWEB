const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check Daraz Mall', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await browser.pause(500);
        const elem = await Daraz.service;
        await Daraz.darazMall.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('OS')
        await browser.pause(500);
        
        
    });


   

    
});