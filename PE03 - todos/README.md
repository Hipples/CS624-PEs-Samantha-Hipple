# INPUT
There are multiple user interactions available within this todos app. Users can:

1. Enter text into the text box
2. Press the Submit button
3. Press the Done button on a submitted todo
4. Press the Delete button on a submitted todo
5. Press the tab bar items (All, Active, Complete)

# PROCESS

1. When users enter text into the text box, the inputValue is updated to reflect their entry.
2. When users press Submit, the inputValue is first checked if it is only whitespace, if not, then the text is added as a todo to the todos array.
3. When users press the Done button on a Todo, the todo is toggled between two types: 'active' or 'complete'. 
4. When users press the Delete button on a Todo, the todo is removed from the array. 
5. When users press All, Active, or Complete on the TabBar, the TodoList is filtered by their set type using switch/case statements -- defaults to All. 

# OUTPUT
When successfully submitted, the text from the input box will convert into a todo below the input box and above the submit button. Every new todo that is added, is added to the bottom of the list. When the Done botton is toggled 'complete', it displays with bold, green text. When the Done button is toggled to 'active', it display with the default text styles. Pressing Delete removes the todo from the list. When using the tab bar, all todo items are shown when the All button is highlighted, only those with Done toggled 'active' are shown when the Active button is highlighted, and only those with Done toggled to 'complete' are shown when the Complete button is highlighted. 