Feature: End to End Customer journey validation

    Application Regression

    Scenario: eCommerce products delivery
    Given open the eCommerce Application
    When I add products to shopping cart
    And validate the total cart amount
    Then select the country and verify thank you message

    Scenario: Filling the form to shop
    Given open the eCommerce Application
    When I fill the form details
    Then validate the form behaviour
    Then select the shop page