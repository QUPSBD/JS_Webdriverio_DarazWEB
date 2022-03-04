const Daraz = require('../../pages/daraz.page'); 



describe('Daraz WebApp Testing', () => {
    it('Should Check Min and Max', async () => {
        await Daraz.open();
        await browser.maximizeWindow();
       
        await Daraz.searchInput.setValue('laptop');
        await Daraz.searchBtn().click();
        await browser.pause(500);

        const elem = await Daraz.price;
       // await Installment.installment.click();
       await Daraz.minandmax("10000","50000");
        await elem.scrollIntoView();
        await expect(browser).toHaveUrlContaining('laptop&price');
        await browser.pause(500);
        
        
    });


   

    
});