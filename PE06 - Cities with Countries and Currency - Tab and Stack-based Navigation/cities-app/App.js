// For this programming Exercise, you are expected to enhance the Cities App by adding additional Screens.
// 1.	You will create two more tabs AddCountry and Countries.
// 2.	You will take Country Name and Currency as input to add a country to the list.
// 3.	In the Countries tab you will show the Countries list and their currency. 

import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// import main UI components
import Cities from './src/cities/cities'
import AddCity from './src/add-city/add-city'

import Countries from './src/countries/countries'
import AddCountry from './src/add-country/add-country'

// create instance of a bottom tab navigator
const Tab = createBottomTabNavigator();

// create the main App class
export default class App extends Component {
  // state of the app is focused on an array of cities
  state = {
    cities: [],
    countries: []
  }
  // function to add a city to the array
  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }

  // function to add a country to the array
  addCountry = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ countries })
  }

  // render bottom tab navigator and assign necessary navigation properties
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen name="Cities"  initialParams={{cities: this.state.cities, addCity: this.addCity}} component={Cities} />
          <Tab.Screen name="Add City" initialParams={{cities: this.state.cities, addCity: this.addCity}} component={AddCity} />

          <Tab.Screen name="Countries"  initialParams={{countries: this.state.countries, addCountry: this.addCountry}} component={Countries} />
          <Tab.Screen name="Add Country" initialParams={{countries: this.state.countries, addCountry: this.addCountry}} component={AddCountry} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}