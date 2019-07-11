### ­CIS 399 Android Application Development  Syllabus Summer 2019

**Instructor: Brian Bird**  
 E-mail: [bbird@uoregon.edu](mailto: bbird@uoregon.edu)  
 Office: 162 Deschutes Hall  
 Office hours: 1:00 to 1:50 Monday through Friday  

![Android and Pie](Images/AndroidPie.jpg)

### Course Description

This course introduces students to mobile application programming concepts and mobile application development methodology using the Android Software Development Kit, Java, and Android Studio.

### Learning Objectives

Design the core logic for a mobile software application. Write, debug, and test the code for the core logic for an application. Design User Interfaces that adapt to multiple screen sizes. Evaluate mobile app designs and architectures in terms of user experience, performance, and maintainability.

### CIS 399 Workload

Since this is a 4-week class, we will be meeting five times a week for a total of 8 lecture hours and 2 hours of lab (in the same classroom as the lecture). You should expect to spend approximately 20 hours a week reading, studying and doing programming projects (writing apps) outside of scheduled class/lab times.

It will be extremely important to keep up with the reading and the programming assignments. If you find yourself falling behind, contact the instructor for help immediately—before it is too late.

###Required Textbook

*Murach's Android Programming* 2nd Ed. by Joel Murach, 2015, Murach, 
 ISBN 978-1-890774-93-6

Source code for the examples and exercises in the book can be downloaded here: 
 https://www.murach.com/shop/murach-s-android-programming-2nd-edition-detail

###Computer Software

You are expected to use your own computer to complete the assignments for this class. You will need to install the following software:

**Android Studio:** You can download Android Studio, which includes the Android SDK (for Windows, Linux or OS-X) here: [http://developer.android.com/sdk/](http://developer.android.com/sdk/index.html). The Android Studio setup program will install everything you need to develop Android applications: the IDE, the Android SDK and Platform tools, an Android emulator and system images.

**Java Development Kit:** The latest version of [Open JDK](https://developer.android.com/studio/intro/studio-config.html#jdk) will be installed by the Android Studio setup program. 

###Course Grade

```
 
Term project ..... 50%
Lab assignments .. 50%
```

There are 6 Lab assignments which constitute 50% of your grade. The are two optional assignments, labs 7 and 8, for extra credit. There is a term programming project which comprises the other 50% of your grade. Your grade is based on weighted percentages, *not* total points using the standard grade scale shown below.

| **Letter** | **-**      |           | **+**      |
| ---------- | ---------- | --------- | ---------- |
| *A*        | 90   - 91  | 92   – 97 | 98   - 100 |
| **B**      | 80   - 81  | 82   – 87 | 88   - 89  |
| **C**      | 70   – 71  | 72   – 77 | 78   - 79  |
| **D**      | 60   - 61  | 62   – 67 | 68   - 69  |
| **F**      | Below   60 |           |            |



**Lab Assignments**

|       | **Title**          | **Objectives**                                               |
| ----- | ------------------ | ------------------------------------------------------------ |
| **1** | Click Counter      | Android studio, emulator, xml layouts, widgets, event   handler |
| **2** | Pig Game v1        | Constraint layout, separation of concerns, saving state      |
| **3** | Pig Game v2        | Changing layouts with orientation, menus, PreferenceFragment, or PreferenceActivity, saving state |
| **4** | Pig Game v3        | Multiple activities, sending data to another activity        |
| **5** | Pig Game v4        | Fragments, accessing an object in a different fragment       |
| **6** | Tide Prediction v1 | ListViews, list adapters, consuming a REST service, AsynchTask |
| **7** | Tide Prediction v2 | SQLite database, cursor adapter for ListViews (optional, extra credit) |
| **8** | Tide Prediction v3 | Geolocation (optional, extra credit)                         |

 

**Programming Term Project**

The project will be due the day scheduled for the final exam (there will not be a final exam). You may choose to make any app you like, but it must not be the same as an app in the textbook or one of the instructor’s example apps. The application must have the following: 

- At least 5 kinds of widgets.
- A menu with at least 2 items.
- At least 2 activities with an “up” navigation button on one of the activities.
- Different layouts for landscape and portrait orientation (using fragments is optional).
- Persist  activity state when rotating.

Near the middle of the term you will submit a proposal for your term project. Your proposal should be in a single document, nicely formatted and include:

- At least a two-paragraph description of the app.

- A bulleted list of features.

- UI diagrams for the activities and/or fragments that identify the type and function of the UI widgets.

 

### Significant Dates

**Independence Day Holiday:** Tuesday, July 4; Independence Day holiday, no class.

**Final Project Due:** Week 4, Friday, July 19; end of the four-week term.

​    

###Universal Learning Environment

The University of Oregon, the CIS department and I are all working to create inclusive learning environments. Please notify me if there are aspects of instruction or design of this course that result in barriers to your participation.

 Students with a UO disability notification letter should please meet with me as early as possible. You may also wish to contact Disability Services in 164 Oregon Hall at 346-1155. For information about Support and Services for Students with Disabilities, see the [Disability Services web page](http://ds.uoregon.edu/)




### Class Policies:

**Attendance:** It is essential to attend every class session in order to succeed in this course, but no grade will be given for attendance.

**Late Assignments: *No late programming projects will be accepted, although there will be a quasi-grace period between the due date and the beginning of the first class of the week. Assignments submitted during that time will have 10% deducted from the grade. Assignments won’t be accepted after the beginning of class. Partial credit will be given for projects that are partially completed.***

**Academic Honesty:** While students are encouraged to discuss lab assignments and to use each other as resources, each student is responsible for his/her own work. In other words, you can help each other, but you can’t copy any part of someone else’s work. The end product must be each student’s own individual work.

### Schedule (Tentative)

**Week 1**, June 23 - 29

| **Day** | **Topic**                                           | **Do before class**                                          |
| ------- | --------------------------------------------------- | ------------------------------------------------------------ |
| M       | Intro   to mobile dev and Android development tools | Skim   Ch. 1: An Intro to Android and Android Studio,   Read   Murach’s [Android Studio Update for   2017](https://www.murach.com/shop/murach-s-android-programming-2nd-edition-detail),   Optional:   [Android   Studio Overview](http://developer.android.com/tools/studio/index.html) |
| Tu      | UI   in Java                                        | Read   Ch. 2: How to Start Your First App,    Read   [Building a Responsive UI   with Constraint Layout](https://developer.android.com/training/constraint-layout/)      *Start Lab 1: Ch. 2 & 3   Ex, Click counter app* |
| W       | Activity   Lifecycle                                | Ch.   3: How to Finish Your First App                        |
| Th      | Persisting   state                                  | *Start Lab 2: Ch. 4 Ex, Pig   Game v1*                       |
| F       | Debugging                                           | Read   Ch. 4: How to Test and Debug an Android App,   Optional: [Debugging with Android   Studio](http://developer.android.com/tools/debugging/debugging-studio.html), |
|         |                                                     | **Submit   Labs 1 and 2**    *See Canvas for the due date and time* |



Week 2, June 30 – July 6**

| **Day** | **Topic**                                                    | **Do before class**                                          |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| M       | More   on Layouts and Widgets   Changing   layouts with orientation | Ch. 5: How to Work with Layouts and Widgets                  |
| Tu      | More   on UI Events                                          | Read Ch. 6: How to Handle Events                             |
| W       | Themes   and styles   Activity   lifecycle, persisting state | Skim Ch. 7: How to work with Themes and Styles, read [Styles and Themes](http://developer.android.com/guide/topics/ui/themes.html), *Start Lab 3: Ch. 6, 7, 8 Ex, Pig Game v2* |
| Th      | Independence   Day Holiday                                   | No class                                                     |
| F       | Menus,   Preferences   Launching   new Activities   Pass   data with an Intent | Read Ch. 8: How to Work with Menus and Preferences   Read Ch. 10, pg. 320-321: How to work with intents |
|         |                                                              | **Submit lab 3 and a Term Project Proposal**. *See Canvas for the due date and time* |



**Week 3, July 7 - 13**

| **Day** | **Topic**                 | **Do before class**                                          |
| ------- | ------------------------- | ------------------------------------------------------------ |
| M       | Multi-activity apps       | *Start Lab 4: Pig Game v3*                                   |
| Tu      | UI   Fragments            | Read Ch. 9: How to Work with Fragments. *Start Lab 5: Ch. 9 Ex, PIg game v4* |
| W       |                           |                                                              |
| Th      | ListView                  | Read Ch. 10b: pg. 314-319                                    |
| F       | Consuming   a web service | Review Ch. 10b: pgs. 320-328. *Start Lab 6: Ch. 10 Ex, Tide Table v |
|         |                           | **Submit Labs 4 and 5**   *See Canvas for the due date and time* |



**Week 4, July 14 - 20**

| **Day** | **Topic**                    | **Do the reading before class**                              |
| ------- | ---------------------------- | ------------------------------------------------------------ |
| M       | AsyncTask   Parsing   XML    | Read [AsyncTask](http://developer.android.com/reference/android/os/AsyncTask.html), Read Ch. 10a: pg. 290 -395, 302 - 305 |
| Tu      | SQLite   Database            | Read Ch. 13 Read:   [Android SQLite Tutorial](http://www.vogella.com/tutorials/AndroidSQLite/article.html) |
| W       | Geo-location                 | Read Ch. 18, **Submit Lab 6**   *See Canvas for the due date and time* |
| Th      | TBD                          |                                                              |
| F       | Term   Project Presentations | **Submit extra credit labs and term Project**                |

 