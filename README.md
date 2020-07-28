# Coaching Question Generator

- Web app to generate coaching questions at random.
- Set as challenge by mentor - original spec below.
- Not built using a follow along tutorial.

## Tech Used

- React.js.
- JavaScript.
- Twitter share.
- Netlify.

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
