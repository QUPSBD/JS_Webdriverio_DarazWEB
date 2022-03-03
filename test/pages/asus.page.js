const Page = require('./page');


class Asus extends Page {

    get searchInput() {
        return $('#q#q');
    };

    Asus(){
        return $('div:nth-child(2) > div.c2uiAC > div > div.c1WzWT.ckylKX > label:nth-child(1) > span:nth-child(2)');
    }
    
}

module.exports = new Asus();



