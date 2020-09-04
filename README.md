# Coaching Question Generator

- Web app to generate coaching questions at random.
- Set as challenge by mentor - original spec below.
- Not built using a follow along tutorial.
- Testing added as second part - notes below.

## Tech Used

- React.js (useState).
- JavaScript.
- DOM manipulation.
- HTML.
- CSS.
- Twitter share.
- Netlify.
- Jest.
- Puppeteer.

## Features

- Displays a random question from a list each click.
- Questions do not repeat until all have been used.
- Copy to clipboard - so users can use the question elsewhere or to make a note.
- Tweet - Opens up a new compose tweet (if/when user is logged into Twitter) with the question and a link to the app.

## What I learned

- The importance of project planning and high level architecture.
- Debugging and errors - what do do if the code doesn't work.
- Knowing when to give up and ask = use time efficiently.
- How to consume and delve into/cherry pick the collected data.
- React hooks.
- Knowing that even if you aren't solving the issue, you are still learning along the way.
- Great Git practice.
- Been cool to do a second project without using or referencing another (one that does what i need to do on YouTube in full = the easy way of completing the task).

## Challenges

- Understanding Stack Overflow potential solutions then refactoring into my code context.
- The mental game. I got very frustrated and somewhat depressed during this project.
- Twitter share injecting as an iframe.
- Redraw and not storing state so used hooks to move state elsewhere.
- Working with arrays - getting questions to not repeat whilst on random.
- Understanding how builds work and when to do them.

## Improvements

- Previous question(s) - if they click generate and want to go back.
- Generate a list of questions they had (for future use).
- Have question list hosted in a free database somewhere and fetch/interact from there (option/link for them to access all the qs too).
- Light dark mode toggle.
- Redo using material UI.
- Spacebar or enter to generate.
- Accessibility test and tweaks.
- Refactor using SOLID principles.

## Watch Me Build This

- #100daysofcode 58-67.
- [Daily Videos - Instagram](https://www.instagram.com/samchillcott/)

## Original Spec

1. User presses the button
2. Randomly choose a question from a list. This could be loaded as a JSON file or otherwise.
3. Display the question to the user.
4. OPTIONAL EXTRA - Ensure that questions don't repeat until you've displayed all of the list. This is more of an exercise to think about how it could be done, worry about implementation later.

This functionality is easy for a reason. Don't use any existing code as a shell but write everything from scratch. In future you probably will use some type of pre-built shell that you'd code into, but for sake of burning these neurons in try to write everything without copy-pasting from outside. That being said, don't try to force yourself to remember everything that needs to be written. When you need to, do look up what needs to go where and compare your code with other things you wrote or the web.

Simply avoid defaulting into 'ok, no copy paste, but I'll just continuously switch between the two windows to make sure I don't miss anything'. Nah - give it a shot to code as much as you can until you go blank for 5 seconds, and only then look up, remember, write that and repeat.

## Testing: Features

- Unit Tests:
  - Should select an item from an array at random.
  - Should throw an error if not passed an array.
  - Should throw an error if array is empty.
  - Should throw an error if array contains a non number.
- Integration Test: Randomize function should select an item from the data (copy of questions) array at random.
- e2e Test: Should display random question inside question component when button clicked (App opened in headless Chromium browser using Puppeteer).

## Testing: What I learned

- Rewriting (my own) code to pure functions with no side effects as preparation for testing aka decoupling. Also doubles up as optimization.
- Refactoring my own code in general - more knowledge of control flow reduced my logic code from approx 21 lines to 17 lines and 2 fewer functions.
- The importance/usefulness of pure functions.
- Testing for exceptions.
- Why writing test first can give you better code. Write the error handling in the test then go back to the source code to pass the test.
- How to use the debugger in VSCode - in general, for tests and test inside React.

## Testing: Challenges

- Preparing my code for testing to start off with by rewriting as pure functions.
- Understanding my own code x months on. (plus the fact a lot of it wasn't my code). Write code/variables and comments so it is self explanatory to prevent this.
- Keeping to the task at hand and not being distracted by other tweaks and fixes.
  Understanding what to actually test for (the thinking/philosophy and approach).
- Testing expected outputs that change each time - my unit test was on a function that was specifically designed to give a different output each time (impure).
  - Had to install jest-extend (hard to configure because I am using React rather than pure Jest installation). Needed to import modules.
- Understanding what we are actually testing for.
- Struggling to see what the test results actually were - some are passing when I don’t think they should be. I am feeding them inputs that should fail that specific test.
  - selectRandomItemFromArray([1, 2, "cheeky"]).toThrow('Array contains a non-integer').
  - If I remove cheeky it should fail this test right? Because they ARE all integers.
- Getting undefined errors on integration test - Cannot read property 'constructor' of undefined.
- e2e:
  - using react (index.html) shows blank page, changed to local host.
  - Targeting classes that are inside other components to test.
- Debugging in the testing environment - unsure where/how to check what the tests are grabbing (I can’t see the variables/action I need to debug. Which highlights my lack of knowledge using the debugger (and not console logs!)

## Testing: Improvements

- Either test or rewrite function to be fully pure = easier to test.

## Testing: Watch Me Build This

- #daysofcode 3/8/20 - 7/8/20.
- [Daily Videos - Instagram](https://www.instagram.com/samchillcott/)
