
module.exports = class Page {
   
    open(path) {
        return browser.url(`https://www.daraz.com.bd/${path}`)
    }
}
