#Lab 2: Pig Game
CS235AM, Intermediate Mobile Application Development: Android

------

##Overview

In this lab, you will get practice working with:

- Debugging

- Constraint layouts

- Loading different layouts based on device orientation.  


##Part 1: Ch. 4 and 5 Exercises  

For each of the exercises shown below, do one of the following:

1. Follow all the steps shown in the book, build and ran the app. Experiement by changing some of the code to better understand how the app works.  

   OR

2. Download the completed solution, build and run it. Read through the steps in the book and inspect the relevant code. Experiement by changing some of the code to better understand how the app works.

**Do these exercises:**

- 4-1, Test and debug the Tip Calculator app
- 5-1, Tip calculator

## Part 2: PIg Game  

###Using Different Layouts for Different Device Orientations   

**Group A: Big Pig – An 8-sided die**

Create an app for playing a version of the dice game "Pig". 

The UI for your game should be similar to the one shown below:

![UI portrait layout for the pig game](BigPigLayout.png)

The “Big Pig” version of the game is a dice game with 2 players and one die, but it is an 8-sided die. Each player rolls the die as many times as they wish or until they roll an 8. Their score for the turn is the sum of their rolls unless they get an 8, then it’s zero. When they roll an 8, the “Roll Die” button should be disabled, re-enable it when the next player starts their turn Players keep taking turns rolling until someone gets to 100. If the player who had the first roll reaches 100, the second player may still take their turn. The player with the highest score wins.

- Images will be provided for each side of the die.
- Provide different layouts for landscape and portrait orientation
- Use the names entered in the editable text views for Player 1 and Player 2 to display the name of the player whose turn it is.
- Disable the roll die button when an 8 is rolled.
- Write a separate Pig class that will contain the logic for the game.
- Optional: Use a Frame Layout to hold a background image for the app (you can provide your own image).

### Testing

I will test your app on a Pixel 2 emulator running an API 19 image.



##Submission

**Beta Version**

Post the following to the Beta + Code Review Forum:

1)    For part 1: A document containing screen-shots of the tutorial app with each screen-shot labeled. (Please use .docx or .pdf format.)

2)   For part 2:  A zip file containing your app’s Android Studio project folder. (Make your solution smaller by deleting the *build*  folder.)   
Or, better yet, a link to a repository containing your solution source code. (You can put the link on the same document with the screen-shots for part 1.)

3)   A copy of your lab instructions (so the lab partner who reviews your work will know what the requirements were for your app).

 

**Production Version**

1. Items 1 and 2 above, but revised as needed.
2. The code review of your work (the one done by your lab partner) with the second column, *Release*, completed by you.

------

Written by Brian Bird, Lane Community College, Fall 2013. Revised Fall 2019