const Page = require('./page');


class Walton extends Page {

    get searchInput() {
        return $('#q#q');
    };

    viewMore(){
        return $('div:nth-child(2) > div.c2uiAC > div > div.c1qSmo');
    };

    Walton(){
        return $(' div:nth-child(2) > div.c2uiAC > div > div.c1WzWT.c3cfO2 > label:nth-child(11) > span:nth-child(2)');
    }

    
}

module.exports = new Walton();



