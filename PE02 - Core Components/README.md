# INPUT
Forms of user input:
1. Can enter text into text box -- cannot submit/does nothing besides appear as you type
2. Can select course from list to view pop-up modal with course description
3. Can close pop-up modal 

# PROCESS
The App() function is the main component which returns a scrollable view with a title section, icon section, user-input section, and course information section -- all with their own customized styles (based on app-wide size and color themes) imported from the constants directory. 

The CourseList() function, defined in the components directory, accepts an array of courses, that have been filtered by their "type" --> core, advanced, and capstone, and are imported to the App.js from the constants directory. Inputting one of these arrays returns a list of objects that include each course subject, key, and name as well as a pop-up modal with the course description when clicked. 

The DisplayModal() function includes a custom Button component in order to close the modal. The modal is able to traverse the array and appear with the relevant content by accepting three parameters from the CourseList() function's mapping process - the current state, its setter, and the current datapoint. 

# OUTPUT
The output of program is a single screen application with a scrollable, off-white background, with "City University of Seattle / MSCS Program" as the title at the top with a marine background. This is followed by the requested icon centered on a teal background. Next, moving down, there is a textbox for the user to write (but do nothing else with) their favorite course -- with a placeholder that reads "ex. CS 624", on a marine background. Lastly, there is the course list which is separated into three sections: "Core Requirements", "Depth of Study", and "Capstone". Each header has a marine background and pink text, while the list of courses is simply on the original off-white background. A modal with the course subject, key, name, and description pops up when one of the courses in the list is clicked. The modal can be closed via the close button or the back button on your device. And that's it!