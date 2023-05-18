# INPUT
Users can enter string data in two of the four screens: Add City and Add Country.
Users can submit their data by pressing the submit button on these two forms.

*Users can select an item from their lists in Cities and Countries for more information.

# PROCESS
When a user types into any of the input fields, the program captures the value change.

When a user submits their data from either form (add city or add country), the program first checks to ensure both fields in the form contain data. If so, the data is added to its respective object properties (city or country), then the object is passed through the top-level routing parameters so that it can be shared across all components. The input form is then reset to its original state and the user is sent to the page in which their data was just added (cities or countries). 

*When a user selects an item from one of their lists (either cities or countries), a navigation event is triggered to take them to the a page that is named after the city or country name they selected -- however, there are currently no routes defined for this action. 

# OUTPUT
The load screen initializes the app to open on the Cities page. 
A default message is displayed: "No saved cities!"

There are four navigation tabs are the bottom of the screen: Cities, Add City, Countries, Add Country. 

The Add City and Add Country pages display a form with two input fields.

The placeholders state what should be entered into each field (city name & country name; country name & currency name, respectively).

The Countries page looks like the Cities page upon load.
A default message is displayed: "No saved countries!"

When typing into one of the input fields, the user will see their entry replace the placeholder. If the user submit action fails, an alert will pop up to prompt the user to ensure both fields of the form contain data. After successfully submiting the form, the user will be redirected to the page in which their newly entered data will populate.

Returning to either the add city or add country pages will result in a new blank form for additonal user entries.

When more than one entry has been submitted by a form, the newest data populates at the bottom of the displayed list. 

*If one of the list items on either the cities or countries page is pressed, an error will result due to the navigation routes being undefined. 