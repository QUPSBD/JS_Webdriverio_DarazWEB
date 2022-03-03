const Page = require('./page');


class SearchPage extends Page {


    get searchInput() {
        return $('#q#q');
    };
    searchBtn() {
        return $('.search-box__search--2fC5 > button');
    };

    l2h() {
        return $('div.c3trXJ > div');
    };


   selectL2H() {
        return $('div.c2tv0r > span:nth-child(2)');
    };
}

module.exports = new SearchPage();



