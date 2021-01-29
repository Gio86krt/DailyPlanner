# DailyPlanner

- The application displays a series of input fields indicating a timeslot, a text area and a save button;

- The fields are created dinamically using a loop in javaScript;

- a function inserted in the loop checks for the current time and assignes a class name accordingly to the styling provided, so the background color matches the requirements;

- The user inserts the sctivity in the provided area, hits the save button, and the value inserted in the activity area gets stored in the local storage together with a string referring to the timeslot;

- Data are stored in an array of objects;

- On page reload the script runs a loop that checks the local storage for data,if data is found it loops over the array and prints the text values into the matching timeslot;

[Repository-Link](https://github.com/Gio86krt/DailyPlanner)\
[Quiz-Link](https://gio86krt.github.io/DailyPlanner/)

![Screenshot2](/screenshots/first.png)
![Screenshot3](/screenshots/second.png)
