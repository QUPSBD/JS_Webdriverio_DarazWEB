const Page = require('./page');


class MsiLaptop extends Page {

    get searchInput() {
        return $('#q#q');
    };

    msi(){
        return $('div:nth-child(2) > div.c2uiAC > div > div.c1WzWT.ckylKX > label:nth-child(4) > span:nth-child(2)');
    }

    
}

module.exports = new MsiLaptop();



