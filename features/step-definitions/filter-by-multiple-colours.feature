Feature: Product listing -> filter by multiple colour

  As a customer
  I would like to refine my search results based on color
  So that I can view the products of my liking by selecting multiple colours

  Scenario: Customer filters by multiple colours

Given I am viewing <Product> list "tops"
And I filter the product list
Then I filter by option <Colour>
And I select colour "white"
Then I select colour "black"
When I apply these filters
Then Filter button has 1 filter
And Filter returns a product list

  Examples:
  |Products |Colour|
  |tops     |white |
  |tops     |black |

  //refactored BDD statements