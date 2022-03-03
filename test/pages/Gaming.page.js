const Page = require('./page');


class Gaming extends Page {

    get searchInput() {
        return $('#q#q');
    };

    gamingSelect(){
        return $('#root div > a:nth-child(2)');
    }
    
}

module.exports = new Gaming();



