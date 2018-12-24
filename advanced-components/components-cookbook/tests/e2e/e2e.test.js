module.exports = {
  'step one' : function (browser) {
    browser
      .pause(5000)
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 10000)
      .useXpath()

      // ActiveSpan
      .waitForElementPresent("//a[normalize-space(text())='ActiveSpan']", 10000)
      .click("//a[normalize-space(text())='ActiveSpan']")
      .pause(1000)

      // ActiveSpan
      .waitForElementPresent("//a[normalize-space(text())='Form']", 1000)
      .pause(1000)
      .click("//a[normalize-space(text())='Form']")

      .useCss()
      .waitForElementPresent("input[name='name']", 1000)
      .setValue("input[name='name']", "hello")

      .useCss()
      .waitForElementPresent("input[name='name']", 1000)
      .setValue("input[name='name']", "bye")
      .waitForElementPresent(".ReactStyleguidist-Layout__components .ReactStyleguidist-ReactComponent__root:nth-child(3) .ReactStyleguidist-Playground__preview pre", 1000)
      .click(".ReactStyleguidist-Layout__components .ReactStyleguidist-ReactComponent__root:nth-child(3) .ReactStyleguidist-Playground__preview pre")

      .useXpath()
      .waitForElementPresent("//a[normalize-space(text())='Input']", 1000)
      .click("//a[normalize-space(text())='Input']")

      .useCss()
      .waitForElementPresent("input[name='name']", 1000)
      .setValue("input[name='name']", "bob")
      .waitForElementPresent(".ReactStyleguidist-Layout__components .ReactStyleguidist-ReactComponent__root:nth-child(4) .ReactStyleguidist-Playground__preview pre", 1000)
      .click(".ReactStyleguidist-Layout__components .ReactStyleguidist-ReactComponent__root:nth-child(4) .ReactStyleguidist-Playground__preview pre")

      .useXpath()
      .waitForElementPresent("//a[normalize-space(text())='Submit']", 1000)
      .click("//a[normalize-space(text())='Submit']")
      .waitForElementPresent("//a[normalize-space(text())='Map']", 1000)
      .click("//a[normalize-space(text())='Map']")
      .waitForElementPresent("//a[normalize-space(text())='MapSearch']", 1000)
      .click("//a[normalize-space(text())='MapSearch']")
      .waitForElementPresent("//a[normalize-space(text())='Messages']", 1000)
      .click("//a[normalize-space(text())='Messages']")
      .waitForElementPresent("//a[normalize-space(text())='SimpleInput']", 1000)
      .click("//a[normalize-space(text())='SimpleInput']")
      .waitForElementPresent("//a[normalize-space(text())='SpreadSheet']", 1000)
      .click("//a[normalize-space(text())='SpreadSheet']")
      .waitForElementPresent("//a[normalize-space(text())='Switch']", 1000)
      .click("//a[normalize-space(text())='Switch']")

      .assert.elementPresent("//*[contains(text(), \'Pay with:\')]")

      .assert.elementPresent("//*[contains(text(), \'Paying with:\')]")
      .waitForElementPresent("//a[normalize-space(text())='Weather']", 1000)
      .click("//a[normalize-space(text())='Weather']")

      .useCss()
      .waitForElementPresent("button", 3000)
      .click("button")

      .useXpath()
      .waitForElementPresent("//*[contains(text(), \'Latest weather projection\')]", 1000)
      .assert.elementPresent("//*[contains(text(), \'Latest weather projection\')]")
      .waitForElementPresent("//a[normalize-space(text())='Wizard']", 1000)
      .click("//a[normalize-space(text())='Wizard']")

      .pause(1000)
      .end();
  }

};
