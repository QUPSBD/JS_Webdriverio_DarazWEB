const Page = require('./page');


class FulFilled extends Page {

    get fulfilled(){
       return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(3)');
   }

   get service (){
       return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(3) > div.cnHBqi')
   }
 
}

module.exports = new FulFilled();



