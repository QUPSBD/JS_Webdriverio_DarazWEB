const Page = require('./page');


class Warranty1Year extends Page {

    get oneYear(){
        return $('div:nth-child(9) > div.c2uiAC > div > div > label:nth-child(3) > span:nth-child(2)');
    };


   get SSD (){
       return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(10) > div.cnHBqi');
   }

 
}

module.exports = new Warranty1Year();



