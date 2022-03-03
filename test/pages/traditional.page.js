const Page = require('./page');


class Traditional extends Page {

    get searchInput() {
        return $('#q#q');
    };

    traditionalSelect(){
        return $('#root div > a:nth-child(4)');
    }
    
}

module.exports = new Traditional();



