const Page = require('./page');


class LanguageChange extends Page {
    selectLanguage(){
        return $('//*[@id="topActionSwitchLang"]/span');
    };
     changeLanguage(){
        return $('#lzdSwitchPop > div > div:nth-child(1)');
    }
}

module.exports = new LanguageChange();



