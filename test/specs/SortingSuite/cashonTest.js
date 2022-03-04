const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Check Cash On Delivery Payments', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await browser.pause(500);
        const elem = await Daraz.service;
        await Daraz.cashOnDelivery.click();
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('COD')
        await browser.pause(500);
        
    });


   

    
});