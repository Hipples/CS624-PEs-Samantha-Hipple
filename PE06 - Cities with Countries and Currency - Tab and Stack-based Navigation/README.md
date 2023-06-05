# INPUT
Users may select one of four screens from a Bottom Tab Menu (`CitiesNav`, `AddCity`, `CountriesNav`, `AddCountry`). 

In `AddCity`, users may type into the "City name" and "Country name" boxes and submit the data using the "Add City" button. 

In `AddCountry`, users may type into the "Country name" and "Currency name" boxes and submit the data using the "Add Country" button. 

In `CitiesNav`, users may select a city from the list if any are displayed. 
In `CountriesNav`, users may select a country the list if any are displayed.  

When viewing a `city`, users may type into the "Location name" and "Location info" boxes and submit the data using the "Add Location" button.

When viewing a `country`, users may type into the "Currency name" and "Currency info" boxes and submit the data using the "Add Currency" button. 

# PROCESS
All navigation is processed using `@react-navigation/native`. The bottom tabs use react navigation's bottom tab navigator, while the `city` --> `locations` and `country` --> `currencies` flow use react navigation's native stack navigators. 

All user data and processing functions are passed via route parameters. 

For example, when considering the process of adding a `city` and its `locations`, it is the main `App` component defines the `addCity()` function, the `addLocation()` function, as well as the state of the `cities` array. The `city` object that contains the array of `locations` that users can add to a `city` page, is defined in the `AddCity` component, and is passed as a property of `city` along the route as well. 

This same architecture is used to pass data when creating a `country` and its `currencies`, as well. 

When adding a `city` object to the `cities` array, the `addCity()` function obtains the previous `cities` state, then pushes the new `city` onto the array and resets the state of `cities`.

This same logic is applied to the `addCountry()` function. 

When adding a `currency` object to a `country`, the function `addCurrency()` accepts the user input for the `currency` object (`name` & `info`) as well as the `country` object that was selected. The `id` of said `country` is then used to find the correct object in the `countries` array to update. Once the `chosenCountry` has been selected by the program, the new `currency` is pushed onto the end of that country's currency array and the state of the `countries` array is reset to reflect the newly added user data. 

This same logic is applied to the  `addCurrency()` function. 

When accepting submissions from any of the four forms available within the application, the program will output an alert that both input fields within the form need to be completed for th e user data to be successfully submitted. 

# OUTPUT
Our application initially loads on the `Cities` screen within 'CitiesNav' with "No saved cities!" displayed.

If the user selects 'CountriesNav' prior to adding any countries, "No saved countries!" is displayed.

When user data is successfully submitted using the "Add City" button, the individual submissions are displayed in a list on the 'CitiesNav' tab. 

When user data is successfully submitted using the "Add Country" button, the individual submissions are displayed in a list under the 'CountriesNav' tab. 

When user data is successfully submitted using the "Add Location" button, the individaul submissions are displayed in a list under the 'Add City' tab. 

When user data is successfully submitted using the "Add Currency" button, the individaul submissions are displayed in a list under the 'Add Country' tab. 

For all components, when an item is added to its respective list, it will be displayed at the bottom of the current list. The alert for incomplete form submission is a pop-up. 