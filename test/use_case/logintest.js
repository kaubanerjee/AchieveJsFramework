// Run from command line via
// $ mocha airvisual-use-case-test.js --timeout=40000

const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const LoginPage = require('../../lib/pages/achieve_login_page');
const HomePage =  require('../../lib/pages/course_home_page')
// The pref exposes console errors to the tests
const pref = new webdriver.logging.Preferences();
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setLoggingPrefs(pref)
  .build();
  driver.manage().window().maximize();
  driver.manage().timeouts().implicitlyWait(10000);

describe('Login Tests', () => {
  
  before(async () => {
    this.loginPage = new LoginPage(webdriver, driver);
    this.homePage = new HomePage(webdriver,driver)
  });

  it('Use case - User can search course', async () => {
    this.loginPage.log('* Start of navigate to Sign in page \n');
    await this.loginPage.openUrl();
    await this.loginPage.waitForTitleToBe("Macmillan Learning Achieve Start");
    this.loginPage.log('* On Landing Page \n');
    await this.loginPage.clickOnSignIn();
    this.loginPage.log('* User click on sign in \n');
    await this.loginPage.waitForTitleToBe("Macmillan Learning :: Login");
    await this.loginPage.loginIn("tanujkumarvishnoi@qainfotech.com","Test@1234")
    await this.homePage.waitForTitle();
    this.homePage.log('! User is on home page\n');
    await this.homePage.enterTextInSearchBox("a");
    //await this.homePage.clickOnSearchIcon();
    await this.loginPage.log(`courses list ${await this.homePage.getListOfCourses()}`);
  });

  it('Use case - User can search course', async () => {
    this.loginPage.log('* Start of navigate to Sign in page \n');
    await this.loginPage.openUrl();
    await this.loginPage.waitForTitleToBe("Macmillan Learning Achieve Start");
    this.loginPage.log('* On Landing Page \n');
    await this.loginPage.clickOnSignIn();
    this.loginPage.log('* User click on sign in \n');
    await this.loginPage.waitForTitleToBe("Macmillan Learning :: Login");
    await this.loginPage.loginIn("tanujkumarvishnoi@qainfotech.com","Test@1234")
    await this.homePage.waitForTitle();
    this.homePage.log('! User is on home page\n');
    await this.homePage.enterTextInSearchBox("a");
    //await this.homePage.clickOnSearchIcon();
    await this.loginPage.log(`courses list ${await this.homePage.getListOfCourses()}`);
  });

   after(async () => driver.quit()
  );
});
