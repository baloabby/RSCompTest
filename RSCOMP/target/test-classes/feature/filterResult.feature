Feature: Filter Result Test of products
  I want to test filter results functionalities

  Background: 
    Given I open the Homepage
    And I click allproducts button
    And I click the Cables and Wire button
    And I click the Audio Video Cable button

  @BrandTest
  Scenario: As a customer I want to filter search results by brand
    When I click the Jack Cable Assemblies button
    Then I click the Brand button
    And I  tick the RSPro tickbox
    And I click the filter button
    And I  verify the results of the brand filter applied
    And I close browser

  @ProductperPageTest
  Scenario: As a customer I want to filter search results by number of products per page
    When I click AV Mixed Cable Assemblies button
    Then I click Result per page button
    And I select hundred button
    And I verify the  number of products on the page
    And I close browser

  @LenghtTest
  Scenario: As a customer I want to filter search results by lenght
    When I click the Jack Cable Assemblies button
    Then I click Result per page button
    And I select fifty button
    Then I click the Lenght button
    And I select the range of lenght of the cables
    And I click the filter button
    And I  verify the results of the filter applied
    And I close browser
