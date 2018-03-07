Feature: Purchase Products End to End
  I want to test purchase product functionalities

  Background: 
    Given I am on the Homepage

  @NewUserTest
  Scenario: As a new user I want to purchase products
    When I click newproducts buton
    And I click USB Type Adaptors button
    Then I add the USB adaptor to basket
    And I click the basket button
    And I clicked checkout button
    And I enter new email
    And I click guest checkout button
    And I enter customer details
    And I click continue to payment button
    And I verify I am on the payment page
    And I close the browser

  @RegisteredUserTest
  Scenario: As a registered user I want to purchase products
    And I click allproducts buton
    And I click Cables and Wire button
    And I click Audio Video Cable button
    When I click Jack Cable Assemblies button
    And I add produts to the basket
    And I view my basket
     And I select branch collection
    And I select the branch
    And I clicked checkout button
    Then I enter username
    And I enter password
    And I click login button
    And I click continue to payment button
    And I verify I am on the payment page
    And I close the browser
