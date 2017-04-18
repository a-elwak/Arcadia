import * as homepage from ../step-definitions/pageObjects/homepage

module.exports = function () {
    this.Given(/^I am on the landing page$/, homepage.gotoPage)
    this.Then(/^I can see logo in navigation bar$/, homepage.hasLogo)
}
    //
    //
    //add all statements below?
    //
    //
    //
    //
    //
    //
    //




// if I use this function I can perhaps include all featured methods in one feature file and list all functions on this JS ascending??