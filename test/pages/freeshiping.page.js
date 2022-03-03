const Page = require('./page');


class FreeShiping extends Page {

    get freeshiping(){
       return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(4)');
   }

   get service (){
       return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(3) > div.cnHBqi')
   }
 
}

module.exports = new FreeShiping();



