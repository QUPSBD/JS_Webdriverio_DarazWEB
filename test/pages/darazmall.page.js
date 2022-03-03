const Page = require('./page');


class DarazMall extends Page {

    get darazMall(){
       return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(5)');
   }

   get service (){
       return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(3) > div.cnHBqi')
   }
 
}

module.exports = new DarazMall();



