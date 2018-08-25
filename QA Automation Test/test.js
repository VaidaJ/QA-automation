var { Builder, By} = require('selenium-webdriver');
var  test = require('selenium-webdriver/testing');
var  assert = require('assert');
var firstname = 'Jonas', lastname = 'Jonaitis', firstnameOutput, lastnameOutput;

  describe('QA automation assignment', function() {
      this.timeout(50000);
      before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
      });

      it('Visit website', async function () {
        await driver.get('http://mangirdas.com/instarem-qa/');
      });

      it('Enter firstname and lastname', async function () {
        await driver.findElement(By.name('firstname')).sendKeys(firstname);
        await driver.findElement(By.name('lastname')).sendKeys(lastname);
      });

      it('Submit the form', async function () {
        await driver.findElement(By.css('body > form > input[type="submit"]:nth-child(8)')).click();
      });

      it('Check if submitted values are the same as they were submitted', async function () {
        await driver.findElement(By.css('body > div.firstname')).getText().then(function(text){
          firstnameOutput = text;
        });
        await driver.findElement(By.css('body > div.lastname')).getText().then(function(text){
          lastnameOutput = text;
        });
        await assert.equal(firstname, firstnameOutput);
        await assert.equal(lastname, lastnameOutput);
      });

      after(async function() {
         await driver.quit()
      });
  });
