import { Image, View, Text, TouchableHighlight, Platform, StyleSheet } from 'react-native';
// PropTypes lets you specify what properties the ProfileCard component can accept.
import PropTypes from 'prop-types';

// Creating dynamic user profile cards
const ProfileCard = (props) => {
    // Destructuring the props. 
    const { image, name, occupation, description, onPress, showThumbnail } = props;
    // Declaring a re-writable style variable for the card container view
    let containerStyles = [styles.cardContainer];
    // Pushing thumbnail view to override default cardContainer view, conditionally
    if (showThumbnail) {
        containerStyles.push(styles.cardThumbnail);
    }
    if (!showThumbnail) {
        containerStyles.push(styles.cardPopOut)
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
            <Text style={styles.cardDescription}>
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

// Declaring main profile card color.
const profileCardColor = 'dodgerblue';

// Platform specific styling applied to view shadow props.
const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: profileCardColor,
        width: 225,
        height: 350,
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 25,
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
        width: 90,
        height: 90,
        borderWidth: 3, 
        borderColor: 'black',
        borderRadius: 45,
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
        width: 60,
        height: 60
      },
      cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
          height: 4,
          width: 4
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
        marginHorizontal: 20,
        marginBottom: 10
      },
      // the default size of all of the profile cards is a thumbnail
      // scaled to 40% the size of the original component
      cardThumbnail: {
        transform: [{scale: 0.4}]
      },
      // the cardPopOut style reduces the original component’s size by 25%,
      // in order to not disturb the neighbors when selected, while still
      // scaling the card to nearly double the size of its thumbnail when 
      // selected by the user
      cardPopOut: {
        transform: [{scale: 0.75}]
      }
});

export default ProfileCard;