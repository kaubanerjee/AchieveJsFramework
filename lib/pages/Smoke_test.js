var webdriver = require('selenium-webdriver');
var chai = require('chai');
var expect = chai.expect;
var email,password,submitBtn;
let applicationUrl='http://int.saplinglearning.me';
var unix;

exports.initBrowser=function (){
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
}

exports.killBrowser=function(){
    driver.quit();
}

exports.launchApp=async function(){
    driver.get(applicationUrl);
}

exports.enterCredentials=async function (){
        email= await driver.findElement(webdriver.By.css("input[id='username']"));
        await email.click();
        await email.sendKeys('raptorinstructor');

        password= await driver.findElement(webdriver.By.css("input[id='password']"));
        await password.click();
        await password.sendKeys('fasterthansixmill');

        submitBtn=await driver.findElement(webdriver.By.css('#submitButton'));
        await submitBtn.click();
}

exports.verifyLoginStatus=async function(){
    let usermenu=await driver.findElement(webdriver.By.css('#user_menu'));
        await expect(usermenu).to.exist;
        console.log('User logged in successfully');
}

exports.clickToOpenCourse=async function(){
    let course=await driver.findElement(webdriver.By.xpath("//h4[contains(text(),'PO Phil')]"));
        await course.click();
}

exports.verifyCourseLaunched=async function(){
    let sideIcon=await driver.findElement(webdriver.By.css('#left-side-block'));
    await expect(sideIcon).to.exist;
    console.log('User has opened course');
}

exports.clickToAddActivity=async function(){
    var selectAssessmentUrl= await driver.executeScript("var url=document.querySelectorAll('#section0_jump option')[1].value;return url;");
    await driver.get(selectAssessmentUrl);
}

exports.provideAssessmentName=async function(){
    unix = 'Automation'+Math.round(+new Date()/1000);
    let assessmentName=await driver.findElement(webdriver.By.css('#id_name'));
    await assessmentName.click();
    await assessmentName.sendKeys(unix);
}

exports.clickToSaveAndContinue=async function(){
    let saveAndContinueBtn= await driver.findElement(webdriver.By.css('#id_submitbutton'));
    await saveAndContinueBtn.click();
}

exports.verifyAssessmentCreated=async function(){
    let newAssignmentTab= await driver.findElement(webdriver.By.xpath("//li[text()='"+unix+"']"));
    await expect(newAssignmentTab).to.exist;
    console.log('New Assessment with title '+unix+" is created.");
}