import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

//import main UI components
import Cities from './src/cities/cities'
import AddCity from './src/add-city/add-city'

//create instance of a bottom tab navigator
const Tab = createBottomTabNavigator();

//create the main App class
export default class App extends Component {
  //state of the app is focused on an array of cities
  state = {
    cities: []
  }
  //function to add a city to the array
  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }
  //render bottom tab navigator and assign necessary navigation properties
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cities"  initialParams={{cities: this.state.cities, addCity: this.addCity}} component={Cities} />
          <Tab.Screen name="AddCity" initialParams={{cities: this.state.cities, addCity: this.addCity}} component={AddCity} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}