# Lab 6, Group B – Multiple Activities

## Let's Make a Deal app

### Objectives

This lab will give you practice creating a multi-screen (multi-activity) application. These are the main concepts you will apply:

- Starting a new activity using an Intent object.

- Sending information from one activity to another using an Intent object.

- Using activity life-cycle call-back methods: onCreate and onResume.

- Using an ActionBar with “up” navigation to return to a “parent” activity.



1. Add code to the default MainActivity 

- Add a button with the text “Door Number 1”

- - In the event handler, send an intent to Activity2 with an int value set to 1.

- Add a button with the text “Door Number 2”

- - In the event handler, send an intent to Activity2 with an int value set to 2.

- Add a button with the text “Door Number 3”

- - In the event handler, send an intent to Activity2 with an int value set to 3.
          
    ![Picture1B](/Users/birdb/Projects/AndroidAppDev1-Java-CourseMaterials/docs/Labs/Lab06/Picture1B.png)

3. Add a second Activity

- Add an ActionBar with an “up” button.

- Add a TextView with the text: “Behind door number __ is a:” using the number from the intent in place of t he blank

- Generate a random number between 1 and 3

- - Based on the random number append the text: “brand new Prius”, “goat”, or “skunk” in the TextView. (You can also make up your own prizes.)

  - Send the prize name back to the first acitivty and replace the "Door Number N" text with the prize name.

    ![Picture2B](/Users/birdb/Projects/AndroidAppDev1-Java-CourseMaterials/docs/Labs/Lab06/Picture2B.png)

### Submission to the LMS

 **Beta Version**

Post the following to the Beta + Code Review Forum:

1. A zip file containing your app’s Android Studio project folder. (Make your solution smaller by deleting the *build*  folder.)   
   Or, better yet, a link to a repository containing your solution source code. 
2. A copy of your lab instructions (so the lab partner who reviews your work will know what the requirements were for your app).

 

**Production Version**

1. Item 1 above, but revised as needed.
2. The code review of your work (the one done by your lab partner) with the second column, *Release*, completed by you.



------

Written by Brian Bird, Lane Community College, Summer 2014. Revised Fall 2019

------

