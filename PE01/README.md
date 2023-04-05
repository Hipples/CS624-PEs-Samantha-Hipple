# INPUT
This is a static app with no user input. Instead, the input to the app is simply the code written in JavaScript using the React Native framework. It includes the import statements for the necessary components from the Expo and React Native libraries, as well as the definition of the App function which serves as the entry point of the app.

# PROCESS
The App() function is a component in React Native that returns a view which contains three Text components and a StatusBar component, all wrapped inside a View component. The styles object defines the styling for the container view, including the background color, alignment, and justification.

# OUTPUT
The output of the app is a screen with a yellow background color (#ffff00) and a centered view (alignItems: 'center', justifyContent: 'center') that displays three lines of text: "Samantha Hipple", "MSCS", and "STC". Additionally, the app includes a StatusBar component that adjusts its style automatically based on the device's settings (style='auto'). The StatusBar component is positioned at the top of the screen and provides information such as the time, battery life, and network status to the user. This exists because it was never removed from the default template of App.js. 
