const Page = require('./page');


class MinMax extends Page {

    get minPrice(){
        return $('div:nth-child(5) > div.c2uiAC > div > input:nth-child(1)');
    };

    get maxPrice(){
        return $('div:nth-child(5) > div.c2uiAC > div > input:nth-child(3)');
    };

   get minmaxPriceBtn(){
       return $(' div:nth-child(5) > div.c2uiAC > div > button');
    };



    async minandmax(min, max){
        await this.minPrice.setValue(min);
        await this.maxPrice.setValue(max);
        await this.minmaxPriceBtn.click();
        await browser.pause(10000);
    }

   

   get price (){
       return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(8) > div.cnHBqi');
   }
 
}

module.exports = new MinMax();



