const Daraz = require('../../pages/daraz.page');



describe('Daraz WebApp Testing', () => {
    it('Should Search Installment Payments', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        const elem = await Daraz.footer;
        await Daraz.installment.click();
        await elem.scrollIntoView();
        await browser.pause(500);
        await expect(browser).toHaveUrlContaining('INSTALLMENT')
        await browser.pause(500);
        
    });


   

    
});