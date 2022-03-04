const Daraz = require('../../pages/daraz.page');

describe('Daraz WebApp Testing', () => {
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await Daraz.open();
        await Daraz.signinBtn().click();
        await Daraz.signin('01713086265', 'abc123');
        await browser.pause(500);
  

            await Daraz.searchInput.setValue('laptop');
            await Daraz.searchBtn().click();
            //await dropdown.selectByIndex(0);
            await Daraz.selectL2H().click();
            await browser.pause(500)
    });

    


    describe('Searching Product', async () => {
      
    });

   
});


