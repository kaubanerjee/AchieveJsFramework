// The contact page allows users to contact sweet light studios
"use strict";
const PageBase = require('../page-base');
var loginPageObject = require('./pageobject/loginpage.json');

class LoginPage extends PageBase {
	constructor ( 
		webdriver,
		driver, 
		targetUrl = 'https://int-achieve-courseware-frontend.mldev.cloud/start',
		waitTimeout = 30000
		) {
		const articleSelector = 'Macmillan Learning Achieve Start'; 
		super(webdriver, driver, targetUrl, articleSelector, waitTimeout);
	}

	async clickOnSignIn() {
		await this.log(loginPageObject.signInButton.type + ' ' + loginPageObject.signInButton.value);
		await this.click(loginPageObject.signInButton.type,loginPageObject.signInButton.value);
	}

	async loginIn(username,password){
		await this.enterText(loginPageObject.inputUserName.type, loginPageObject.inputUserName.value,username);
		await this.enterText(loginPageObject.inputPassword.type, loginPageObject.inputPassword.value,password);
		await this.click(loginPageObject.signIn.type, loginPageObject.signIn.value);
	}

}




	//	await this.waitForElements(this.webdriver.By.css("*")," waiting for all", this.waitTimeout);
	//	await this.waitForElement(this.webdriver.By.css("button[role='button']"),"SignIn button", this.waitTimeout)
	//	await this.clickWhenClickableByCss(loginPageObject.signInButton.value, this.waitTimeout);

module.exports = LoginPage;