# Lab 6, Group A – Multiple Activities

## 99 Little Bugs in the Code app

### Objectives

This lab will give you practice creating a multi-screen (multi-activity) application. These are the main concepts you will apply:

- Starting a new activity using an Intent object.

- Sending information from one activity to another using an Intent object.

- Using activity life-cycle call-back methods: onCreate and onResume.

- Using an ActionBar with “up” navigation to return to a “parent” activity.



1. Add code to the default MainActivity (I’ll call this activity 1)
   - Add a button
     - Change its button title to "Take one down".
     - Create an Intent that sends the number 1 to activity 2.
     - Add an appropriate event handler to the button.
   - Add a second button
     - Change its button title to "Take two down".
     - Add an appropriate event handler to the button.
     - Create an Intent that sends the number 2 to activity 2. 
       Start Activity 2 using StartActivityForResult
   - Add a TextView and the code needed to display a message from activity 2. 
     Get the message using onActivityResult.


![](/Users/birdb/Projects/AndroidAppDev1-Java-CourseMaterials/docs/Labs/Lab06/Picture1.png)

 

2. Add a second Activity and name it “The code”

   -  Add a button and a TextView to the second activity.

   - The text on this button should be "Patch it around".

   - Use an intent to send the message "n little bugs in the code" to activity 1, where n is the number of bugs remaining. 

   - Add a button event handler and any other code necessary so that tapping a button subtracts one from the total number of bugs left, and sends the message above to the first activity. 

     

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

