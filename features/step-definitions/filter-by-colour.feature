Feature: Product listing -> filter by colour

  As a customer
  I would like to refine my search results based on color
  So that I can view the products of my liking by colour

  Scenario: Customer filters by colour

    Given I am viewing <Product> list <tops>
    And I filter the product list
    Then I filter by option "Colour"
    And I select colour "black"
    When I apply these filters
    And Filter button has 1 filter
    Then Filter returns a product list

  Examples:
  |Products |Colour|
  |tops     |black |

  //refactored BDD statements

