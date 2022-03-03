const Page = require('./page');


class HpLaptop extends Page {

    get searchInput() {
        return $('#q#q');
    };

    viewMore(){
        return $('div:nth-child(2) > div.c2uiAC > div > div.c1qSmo');
    };

    hp(){
        return $(' div:nth-child(2) > div.c2uiAC > div > div.c1WzWT.c3cfO2 > label:nth-child(3) > span:nth-child(2)');
    }

    
}

module.exports = new HpLaptop();



