$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("filterResult.feature");
formatter.feature({
  "line": 1,
  "name": "Filter Result Test of products",
  "description": "I want to test filter results functionalities",
  "id": "filter-result-test-of-products",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click allproducts button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the Cables and Wire button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Audio Video Cable button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterResultTest.i_open_the_Homepage()"
});
formatter.result({
  "duration": 11738130325,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_allproducts_button()"
});
formatter.result({
  "duration": 246567285,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Cables_and_Wire_button()"
});
formatter.result({
  "duration": 15596998894,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //a[@href\u003d\u0027/web/c/cables-wires/\u0027]\u0027 (tried for 10 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat Pages.Homepage.ClickCablesandWirebutton(Homepage.java:54)\r\n\tat stepdefinition.FilterResultTest.i_click_the_Cables_and_Wire_button(FilterResultTest.java:23)\r\n\tat ✽.And I click the Cables and Wire button(filterResult.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //a[@href\u003d\u0027/web/c/cables-wires/\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027PORTABLE2562\u0027, ip: \u0027172.16.252.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\ABI~1.BAL\\AppData\\Local\\Temp\\rust_mozprofile.fQnCj4dASbNM, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d53.0.2, platformVersion\u003d10.0, moz:processID\u003d148196.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 4b238858-764f-4ba5-a98f-68de0102c5c4\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/web/c/cables-wires/\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy30.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:673)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:669)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat Pages.Homepage.ClickCablesandWirebutton(Homepage.java:54)\r\n\tat stepdefinition.FilterResultTest.i_click_the_Cables_and_Wire_button(FilterResultTest.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:539)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:761)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:461)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:207)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Audio_Video_Cable_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "As a customer I want to filter search results by brand",
  "description": "",
  "id": "filter-result-test-of-products;as-a-customer-i-want-to-filter-search-results-by-brand",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@BrandTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click the Jack Cable Assemblies button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the Brand button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I  tick the RSPro tickbox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I  verify the results of the brand filter applied",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Jack_Cable_Assemblies_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Brand_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_tick_the_RSPro_tickbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_verify_the_results_of_the_brand_filter_applied()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click allproducts button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the Cables and Wire button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Audio Video Cable button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterResultTest.i_open_the_Homepage()"
});
formatter.result({
  "duration": 6761321159,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_allproducts_button()"
});
formatter.result({
  "duration": 318522153,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Cables_and_Wire_button()"
});
formatter.result({
  "duration": 474648458,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Audio_Video_Cable_button()"
});
formatter.result({
  "duration": 1187901543,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "As a customer I want to filter search results by number of products per page",
  "description": "",
  "id": "filter-result-test-of-products;as-a-customer-i-want-to-filter-search-results-by-number-of-products-per-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@ProductperPageTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click AV Mixed Cable Assemblies button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Result per page button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select hundred button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the  number of products on the page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "FilterResultTest.i_click_AV_Mixed_Cable_Assemblies_button()"
});
formatter.result({
  "duration": 1217875500,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_Result_per_page_button()"
});
formatter.result({
  "duration": 3125722851,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_select_hundred_button()"
});
formatter.result({
  "duration": 226451219,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_verify_the_number_of_products_on_the_page()"
});
formatter.result({
  "duration": 1540710383,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_close_browser()"
});
formatter.result({
  "duration": 405667695,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click allproducts button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the Cables and Wire button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click the Audio Video Cable button",
  "keyword": "And "
});
formatter.match({
  "location": "FilterResultTest.i_open_the_Homepage()"
});
formatter.result({
  "duration": 6073363758,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_allproducts_button()"
});
formatter.result({
  "duration": 307785531,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Cables_and_Wire_button()"
});
formatter.result({
  "duration": 718946675,
  "status": "passed"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Audio_Video_Cable_button()"
});
formatter.result({
  "duration": 631471116,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027PORTABLE2562\u0027, ip: \u0027172.16.252.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\ABI~1.BAL\\AppData\\Local\\Temp\\rust_mozprofile.h2Guxd4BksNb, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d53.0.2, platformVersion\u003d10.0, moz:processID\u003d147780.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: a5fba820-f951-49b6-a78b-65517a2f7033\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027categories\u0027]//a[@title\u003d\u0027Audio Video Cable\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy30.click(Unknown Source)\r\n\tat Pages.CablesandWirespage.ClickAudioVideoCablebutton(CablesandWirespage.java:23)\r\n\tat stepdefinition.FilterResultTest.i_click_the_Audio_Video_Cable_button(FilterResultTest.java:28)\r\n\tat ✽.And I click the Audio Video Cable button(filterResult.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": "As a customer I want to filter search results by lenght",
  "description": "",
  "id": "filter-result-test-of-products;as-a-customer-i-want-to-filter-search-results-by-lenght",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@LenghtTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click the Jack Cable Assemblies button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click Result per page button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I select fifty button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click the Lenght button",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I select the range of lenght of the cables",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click the filter button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I  verify the results of the filter applied",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Jack_Cable_Assemblies_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_click_Result_per_page_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_select_fifty_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_Lenght_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_select_the_range_of_lenght_of_the_cables()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_click_the_filter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_verify_the_results_of_the_filter_applied()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterResultTest.i_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase Products End to End",
  "description": "I want to test purchase product functionalities",
  "id": "purchase-products-end-to-end",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseTest.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 13319893541,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "As a new user I want to purchase products",
  "description": "",
  "id": "purchase-products-end-to-end;as-a-new-user-i-want-to-purchase-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@NewUserTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click newproducts buton",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click USB Type Adaptors button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I add the USB adaptor to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click the basket button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I clicked checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter new email",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click guest checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter customer details",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click continue to payment button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify I am on the payment page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "PurchaseTest.i_click_newproducts_buton()"
});
formatter.result({
  "duration": 399311306,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_click_USB_Type_Adaptors_button()"
});
formatter.result({
  "duration": 1497991670,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_add_the_USB_adaptor_to_basket()"
});
formatter.result({
  "duration": 2973086599,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_click_the_basket_button()"
});
formatter.result({
  "duration": 152066616,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_clicked_checkout_button()"
});
formatter.result({
  "duration": 1384215768,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_enter_new_email()"
});
formatter.result({
  "duration": 213149855,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_click_guest_checkout_button()"
});
formatter.result({
  "duration": 417409370,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_enter_customer_details()"
});
formatter.result({
  "duration": 4386741429,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_click_continue_to_payment_button()"
});
formatter.result({
  "duration": 214484532,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_verify_I_am_on_the_payment_page()"
});
formatter.result({
  "duration": 164918350,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_close_the_browser()"
});
formatter.result({
  "duration": 430944035,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "PurchaseTest.i_am_on_the_Homepage()"
});
formatter.result({
  "duration": 6918866224,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "As a registered user I want to purchase products",
  "description": "",
  "id": "purchase-products-end-to-end;as-a-registered-user-i-want-to-purchase-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@RegisteredUserTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click allproducts buton",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click Cables and Wire button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click Audio Video Cable button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Jack Cable Assemblies button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I add produts to the basket",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I view my basket",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select branch collection",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select the branch",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I clicked checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter username",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click continue to payment button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I verify I am on the payment page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "PurchaseTest.i_click_allproducts_buton()"
});
formatter.result({
  "duration": 480323891,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_click_Cables_and_Wire_button()"
});
formatter.result({
  "duration": 318353591,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_click_Audio_Video_Cable_button()"
});
formatter.result({
  "duration": 1214044771,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_click_Jack_Cable_Assemblies_button()"
});
formatter.result({
  "duration": 1501997277,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_add_produts_to_the_basket()"
});
formatter.result({
  "duration": 3844091207,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_view_my_basket()"
});
formatter.result({
  "duration": 151363158,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_select_branch_collection()"
});
formatter.result({
  "duration": 3168967381,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_select_the_branch()"
});
formatter.result({
  "duration": 1049795535,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_clicked_checkout_button()"
});
formatter.result({
  "duration": 255595396,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseTest.i_enter_username()"
});
formatter.result({
  "duration": 367733841,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element reference of \u003cinput id\u003d\"loginForm:LoginWidgetAction_username_decorate:LoginWidgetAction_username\" class\u003d\"username inputText\"\u003e stale: either the element is no longer attached to the DOM or the page has been refreshed\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027PORTABLE2562\u0027, ip: \u0027172.16.252.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\ABI~1.BAL\\AppData\\Local\\Temp\\rust_mozprofile.2JjQDWqRxz9K, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d53.0.2, platformVersion\u003d10.0, moz:processID\u003d142372.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 074d10be-674d-4527-be68-412e344e8296\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:96)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy30.sendKeys(Unknown Source)\r\n\tat Pages.BasketSummarypage.EnterUsername(BasketSummarypage.java:68)\r\n\tat stepdefinition.PurchaseTest.i_enter_username(PurchaseTest.java:115)\r\n\tat ✽.Then I enter username(purchase.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PurchaseTest.i_enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseTest.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseTest.i_click_continue_to_payment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseTest.i_verify_I_am_on_the_payment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseTest.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});