const Page = require('./page');


class SignIn extends Page {

     signinBtn(){
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
    async signin (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }



    open() {
        return super.open('');
    }
}

module.exports = new SignIn();



