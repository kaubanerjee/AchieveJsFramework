const { Before, Given, When, Then } = require('cucumber')
const action= require('../lib/pages/Smoke_test');
var webdriver = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');

Given('User launches NGA login page in a browser', async function () {
  await action.initBrowser();
  setDefaultTimeout(60 * 1000);
  await action.launchApp();
});

When('Submits valid raptoradmin and fasterthansixmill',async function () {
  await action.enterCredentials();
});

Then('User should be logged into the application',async function () {
  await action.verifyLoginStatus();
});

