const Page = require('./page');


class Installment extends Page {

    get installment(){
       return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(1)');
   }

   get footer (){
       return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(3) > div.cnHBqi')
   }

    
}

module.exports = new Installment();



