# Code Katas

## What is Code Kata
A Code Kata is a time reserved for a developer to practice solving a specific programming problem. By repeatedly solving that problem the developer becomes better at it. By practicing TDD the developer becomes better at it. That practice has a few characteristics that differentiates it from normal day-to-day practice: It is uninterrupted, simple but challenging enough, you are comfortable making mistakes, no project or environment pressure, make steps forward as small as you can.

In the Code Clubs a Kata session will take about 1 hour. The session is broken down into 2 rounds where developers will pair with different developers to solve the problem. The problem is solved using TDD.

The Kata, term is borrowed from martial arts, literally traslanted as "form", refers to a series of choreographed patterns of movements that are practised repeatedly by martial arts learners, as a way to develop strong techniques and mastery. It can't be enough reinforced that one will not learn by picking up fights in the street, but by practice in the presence of a master, or sensei, until the kata movements becomes one's own.

This is not common only to martial arts. [Malcolm Gladwell](http://www.amazon.co.uk/Outliers-Story-Success-Malcolm-Gladwell/dp/1846141214) reports that a study of students at the Berlin Academy of Music shows that 10,000 hours of practice is what it takes to make an elite performer. But remember "It's not practice that makes it perfect. It's perfect practice".

[Dave Thomas](http://codekata.com/) was the first to use the term Code Kata in terms of software engineering deliberate practice.

## Conducting a Kata

### To have a good kata session you need:
- Time without interruptions.
- A simple kata theme.
- Continuous feedback.
- Make sure attendants have installed PHPSpec or equivalent before coming to the kata

### Prior to the kata:
- **Select a kata** you want the group for focus on. Practice it yourself, and identify what is it that you are practising in that specific kata.
- **Setting the environment**. Make sure you have a room with enough space for all attendees. If possible arrange the space so you can have 2 developers sitting next to each other.

### During the kata:
- **Introduction**. Explain what kata is and what we will be the focus of the session.
- **Present the rules**. Explain we are using the 3 laws of TDD and the 4 rules of simple design throughout the exercise.
- **Present the kata**. Describe the problem. List some recommended test cases or specs.
- **Hands on**. Ask the participants to solve the problem in pairs. Give them 20 minutes.
- **Delete!** At the end of the time, ask the participants to delete their code. Yes, you heard me!
- **Pair Programming**. Now, ask each participant to switch pairs. If not doing [ping-pong](http://wiki.c2.com/?PairProgrammingPingPongPattern) make sure whoever didn't have access to the keyboard now do. They will solve the same problem with a different partners, so that they can benefit from each other previous experience and avoid repeating mistakes. At the end of the time limit, ask them to delete the code again.
- **Review**. Ask how did it go (spend a couple of minutes exploring what the group learned).

### At the end:
- **Wrap it up**. Ask for comments, questions, learning experiences. Remember to keep it within the agreed time. People will not come next time if you are not disciplined to finished on time.
 

## 3 Laws of TDD
- Don’t write any code unless you are making a failing test pass
- Don’t add to the test more than enough to get a failure
- Only write enough code to make the one failing test to pass
  
## 4 Rules of Simple Design
- All tests must run and pass
- Contains no duplication
- Express the intent of the programmer
- Minimise number of classes and methods
 
## Kata Test Case/Specs Suggestions

### String Calculator
- Returns 0 when no arguments are passed
- Returns 0 when "0" is passed as a string
- Returns the bare number
- Returns the sum of space separated strings
- Returns the sum of white spaces separated string
- Returns the sum of string with any separator

### FizzBuzz
- Return the string representation of the inputed number for any number
- Return `fizz` for multiples of 3
- Return `buzz` for multiples of 5
- Return `fizzbuzz` for multiples of 3 and 5

### Prime Factors
Return the prime factors for each number, from 1 to 50.

Prime factors for a number, are the prime numbers for which the product of their multiplication will be the original number.

In this example, the number for which we're calculating the prime factors are on the left, and the prime factors for that number are on the right:

2 = 2
3 = 3
4 = 2 x 2
5 =  5
6 = 2 x 3
7 = 7
8 = 2 x 2 x 2
....

### Argument Parser
- Converts short options to booleans -a
- Converts many short options into booleans –a -b
- Converts many short options together into booleans -abc
- Converts many separated short options together into booleans –abc -def
- Converts long options into booleans --foo
- Converts many long options into booleans –foo --bar
- Adds the value to equal signed separated long options --foo=”bar”
- Will only parse valid options
- Lets you set short options that take no value
- Lets you set long options that take no value
- Creates aliases
- Sets options with mandatory value
- Sets options separated by a space
- Sets long options separated by a space
- Accepts short option and value to be concatenated
- Lets you set long options separated by space
- Converts multiple cases simultaneously
- Creates an argument list

### Bowling Game
- Scores 0 for a gutter game
- Scores the sum of rolls when no strikes or spares are made
- Counts one bonus roll for a spare
- Counts two bonus roll for a strike
- Counts two bonus roll for a strike even if they are strikes
- Scores 300 for a perfect game

### Tennis Game
A game consists of a sequence of points played with the same player serving. A game is won by the first player to have won at least four points in total and at least two points more than the opponent. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as "love", "fifteen", "thirty", and "forty", respectively. If at least three points have been scored by each player, making the player's scores equal at forty apiece, the score is not called out as "forty-forty", but rather as "deuce". If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is "advantage" for the player in the lead. 

Scores are named as
- 0 - Love
- 1 - Fifteen
- 2 - Thirty
- 3 - Forty
- if the score is 1-0, it's called Fifteen-Love
- if the score is 2-0 it's called Thirty-Love, and so on
- if both players score 1 point, it's called Fifteen-all
- if both players score 2 points, it's called Thirty-all
- if both players score 3, the score is called deuce
- if the score is 4-0, 4-1, or 4-2, then it's called game
- if score is 3-3, and a player scores, then that player has advantage
- if a player has advantage and the other player scores, it goes back to deuce
- if a player has advantage and scores a point, it's called game

### Roman Numerals
- I for 1
- V for 5
- X for 10
- L for 50
- C for 100
- D for 500
- M for 1000
- I, X, C and M can be repeated up to three times to represent the same number of unities for that value (ex: III = 3, XX = 20, MMM = 3000)
- I before V or X will subtract 1 from V or X (IV = 4, IX = 9)
- X before L or C will subtract 10 from L or C (XL = 40, XC = 90)
- C before D or M will subtract 100 from D or M (CD = 400, CM = 900)
- a symbol representing a smaller number can be put after one representing a bigger one to be summed to that number (ex: XIII, XV, XXII, MC)
- a valid combinations of symbols representing a smaller number can be put after one representing a bigger one to be summed to that number (ex: XIV, MCD)

### Code Breaker
In the code breaker you have a 4 digits secret, and you have to guess what that secret is by providing a 4 digits guess.

The feedback you get depends on how your guess matches the secret. The rules for giving feedback about the matching are:

- Returns an empty string for no matches
- Returns a "-" when one number in the guess exists in the secret (Ex: secret 1234 guess 5168)
- Returns a "+" when one number in the guess exists in the secret in the same exact position  (Ex: secret 1234 guess 6538)
- Returns a "--" for a 2 number match in the wrong place (Ex: secret 1234 guess 5621)
- Returns a "+-" for one number match in the wrong place, and one exact match (Ex: secret 1234 guess 1526)
- Returns a "++--" for two number matches in the wrong place, and two exact matches (Ex: secret 1234 guess 1432)
- Returns a "+" when one number in the guess exists in the secret in both an exact position and in a wrong place (Ex: secret 1124 guess of 5167)
- Ignores duplicate numbers in guess that have already been matched in exact position
  - Returns a "+" for a secret of 1234 and a guess of 1155
  - Returns a "+" for a secret of 4321 and a guess of 5511
  - Returns a "+-" for a secret of 1231 and a guess of 5511
  - Returns a "+-" for a secret of 1231 and a guess of 1155
- Returns "++++" when code is guessed

### Clock

Write a function that meets the following criteria, use node if you want with asserts to do TTD:

- it should accept milli seconds
- should return XXs if less than 60 seconds
- should return XXm XXs if less than 60 minutes
- should return XXh XXm XXs if 60 minutes or more

## Reference Links

- [Curated list of Katas](https://github.com/gmontalvoriv/awesome-katas)
- [The Ultimate Code Kata](http://codinghorror.com/)
