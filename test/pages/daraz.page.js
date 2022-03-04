const Page = require('./page');


class Daraz extends Page {

    signinBtn() {
        return $('#anonLogin')
    }
    get inputUsername() {
        return $('div.mod-input.mod-login-input-loginName.mod-input-loginName > input[type=text]');
    }

    get inputPassword() {
        return $('div.mod-input.mod-input-password.mod-login-input-password.mod-input-password > input[type=password]');
    }

    get btnSubmit() {
        return $('div.mod-login-btn > button');
    }
    async signin(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    selectLanguage() {
        return $('//*[@id="topActionSwitchLang"]/span');
    };
    changeLanguage() {
        return $('#lzdSwitchPop > div > div:nth-child(1)');
    }

    get searchInput() {
        return $('#q#q');
    };
    searchBtn() {
        return $('.search-box__search--2fC5 > button');
    };

    get list() {
        return $('div.c3Cd9k > div > div.c2tv0r > span:nth-child(2)');
    };

    selectL2H() {
        return $('div.c2tv0r > span:nth-child(2)');
    };


    traditionalSelect() {
        return $('#root div > a:nth-child(4)');
    }


    gamingSelect() {
        return $('#root div > a:nth-child(2)');
    }

    Asus() {
        return $('div >div:nth-child(2) >div.c2uiAC >div>div.c1WzWT.ckylKX>label:nth-child(1)>span:nth-child(2)');
    }



    get cashOnDelivery() {
        return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(2)');
    }

    get service() {
        return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(3) > div.cnHBqi')
    }

    get darazMall() {
        return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(5)');
    }

    get freeshiping() {
        return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(4)');
    }
    get fulfilled() {
        return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(3)');
    }

    viewMore() {
        return $('div:nth-child(2) > div.c2uiAC > div > div.c1qSmo');
    };

    hp() {
        return $(' div:nth-child(2) > div.c2uiAC > div > div.c1WzWT.c3cfO2 > label:nth-child(3) > span:nth-child(2)');
    }

    get installment() {
        return $('div:nth-child(3) > div.c2uiAC > div > div > label:nth-child(1)');
    }

    get footer() {
        return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(3) > div.cnHBqi')
    }

    get minPrice() {
        return $('div:nth-child(5) > div.c2uiAC > div > input:nth-child(1)');
    };

    get maxPrice() {
        return $('div:nth-child(5) > div.c2uiAC > div > input:nth-child(3)');
    };

    get minmaxPriceBtn() {
        return $(' div:nth-child(5) > div.c2uiAC > div > button');
    };



    async minandmax(min, max) {
        await this.minPrice.setValue(min);
        await this.maxPrice.setValue(max);
        await this.minmaxPriceBtn.click();
        await browser.pause(10000);
    }



    get price() {
        return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(8) > div.cnHBqi');
    }




    msi() {
        return $('div:nth-child(2) > div.c2uiAC > div > div.c1WzWT.ckylKX > label:nth-child(4) > span:nth-child(2)');
    }
    get ratingStar() {
        return $('div:nth-child(6) > div.c2uiAC > div:nth-child(1) > ul > li:nth-child(5)');
    };


    get Ram() {
        return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(8) > div.cnHBqi');
    }


    ugreen() {
        return $('div.c1WzWT.c3cfO2 > label:nth-child(13) > span:nth-child(2)');
    }

    Walton() {
        return $(' div:nth-child(2) > div.c2uiAC > div > div.c1WzWT.c3cfO2 > label:nth-child(11) > span:nth-child(2)');
    }

    get oneYear() {
        return $('div:nth-child(9) > div.c2uiAC > div > div > label:nth-child(3) > span:nth-child(2)');
    };


    get SSD() {
        return $('div.ant-col-4.ant-col-pull-20.c2cfh3 > div > div:nth-child(10) > div.cnHBqi');
    }
    get TwoYear() {
        return $('div:nth-child(9) > div.c2uiAC > div > div > label:nth-child(1) > span:nth-child(2)');
    };


    xiomi() {
        return $('div.c1WzWT.c3cfO2 > label:nth-child(19) > span:nth-child(2)');
    }



    open() {
        return super.open('');
    }

}

module.exports = new Daraz();



