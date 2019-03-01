// The contact page allows users to contact sweet light studios
"use strict";
const PageBase = require('../page-base');
var homePageObject = require('./pageobject/homepage.json');

class HomePage extends PageBase {
	constructor ( 
		webdriver,
		driver, 
		targetUrl = 'https://int-achieve-courseware-frontend.mldev.cloud/start',
		waitTimeout = 20000
		) {
		const articleSelector = 'Macmillan'; 
		super(webdriver, driver, targetUrl, articleSelector, waitTimeout);
	}

	async enterTextInSearchBox(searchtext){
		await this.enterText(homePageObject.searchInput.type, homePageObject.searchInput.value, searchtext);	
	}

	async clickOnSearchIcon() {
		await this.click(homePageObject.searchButton.type, homePageObject.searchButton.value);
	}

	async getListOfCourses(){
		const By = this.webdriver.By;
	   let a =  await this.elements(homePageObject.courseList.type, homePageObject.courseList.value);//length;
	   return a.length;
	}
}

module.exports = HomePage;