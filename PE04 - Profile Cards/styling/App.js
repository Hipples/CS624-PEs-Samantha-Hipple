/*
    If you press the thumbnail, the component will return to full size. 
    If you press the full-size component, it will collapse back down into a thumbnail view.
    By reorganizing the structure of the component, you can better handle adding more ProfileCard components to the application. 
    
    Later, you’ll add more ProfileCards and see how to organize them into a gallery layout.
*/
import { Component } from 'react';
import { Image, View, StyleSheet, Text, Platform, TouchableHighlight } from 'react-native';

// PropTypes lets you specify what properties the ProfileCard component can accept.
import PropTypes from 'prop-types';
// The immutability helper function update lets you update a specific piece of the component’s state.
import update from 'immutability-helper';

// Storing image for user profile card
const userImage = require('./assets/user.png');

// Creating a user data object that consists of the props needed for the ProfileCard component.
const data = [{
  image: userImage,
  name: 'John Doe',
  occupation: 'React Native Developer',
  description: 'John is a really great JavaScript developer. ' +
  'He loves using JS to build React Native applications ' +
  'for iOS and Android.',
  showThumbnail: true
}];

const ProfileCard = (props) => {
  // Destructuring the props. 
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  // Declaring a re-writable style variable for the card container view
  let containerStyles = [styles.cardContainer];
  // Pushing thumbnail view to override default cardContainer view, conditionally
  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }
  // Returning the profile card component with the destructured user data props
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

// Adding type requirements to the ProfileCard props.
ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }
  // Defining the function for onPress.
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  }
  // Rendering a list of data properties to pass as ProfileCard props. 
  render() {
    const list = this.state.data.map(function(item, index) {
      const { image, name, occupation, description, showThumbnail } = item;
      return <ProfileCard
                key={'card-' + index}
                image={image}
                name={name}
                occupation={occupation}
                description={description}
                onPress={this.handleProfileCardPress.bind(this, index)}
                showThumbnail={showThumbnail} />
    }, this);
    // Returning a view of the list of profile cards
    return(
      <View style={styles.container}>
        {list}
      </View>
    );
  }
}

// Declaring main profile card color.
const profileCardColor = 'dodgerblue';

// Platform specific styling applied to view shadow props.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    shadowColor: 'black',
    ...Platform.select({
      ios: {
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderWidth: 3, 
    borderColor: 'black',
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    shadowColor: 'black',
    ...Platform.select({
      ios: {
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15,
      }
    })
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {
      height: 5,
      width: 5
    },
    textShadowRadius: 3
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  },
  // The cardThumbnail style reduces the component’s size by 80%.
  cardThumbnail: {
    transform: [{scale: 0.2}]
  }
});