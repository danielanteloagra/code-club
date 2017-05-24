Feature: Codebreaker

  Scenario: Getting no hint output if no guesses
    Given the secret is set to "1234"
    When I take the guess "6789"
    Then I should get the output ""

  Scenario: Getting four plusses when code guessed
    Given the secret is set to "1234"
    When I take the guess "1234"
    Then I should get the output "++++"

  Scenario: Getting a plus and a hyphen when one guess in right place and ones guess in wrong place
    Given the secret is set to "1234"
    When I take the guess "1153"
    Then I should get the output "+-" in red

  Scenario: Getting a plus when a guess in the right place
    Given the secret is set to "1234"
    When I take the guess "1155"
    Then I should get the output "+" in yellow
