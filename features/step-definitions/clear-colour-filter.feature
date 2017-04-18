Feature: Product listing -> clear colour by filter

  As a customer
  I would like to refine my search results based on color
  So that I can clear the coloured results by filter

  Scenario: Customer clears colour filters

Given I am viewing <product> list tops
And I filter the product list
Then I filter by option <Colour>
And I select colour White
When I clear all filters
Then I apply these filters
And Filter button has no filters
Then Filter returns a product list

    Examples:
    |Products |Colour|
    |tops     |white |


    //refactored BDD statements