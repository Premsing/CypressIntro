Feature: End to End Customer journey validation

    Application Regression

    Scenario: eCommerce products delivery
    Given open the eCommerce Application
    When I add products to shopping cart
    And valdiate the total cart amount
    Then select the country and verify thank you message