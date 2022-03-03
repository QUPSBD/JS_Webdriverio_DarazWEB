const Page = require('./page');


class Rating extends Page {

    get ratingStar(){
        return $('div:nth-child(6) > div.c2uiAC > div:nth-child(1) > ul > li:nth-child(5)');
    };


   get Ram (){
       return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(8) > div.cnHBqi');
   }

 
}

module.exports = new Rating();



