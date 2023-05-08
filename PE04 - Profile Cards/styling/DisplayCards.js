import { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

// Import the custom profile card component
import ProfileCard from './ProfileCard';

// Storing image for user profile card
const userImage = require('./assets/user.png');

// Creating a list of nine user data objects that consist of the props needed for the ProfileCard component.
const data = [];
for (let i = 0; i < 6; i++) {
  const userData = {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description:
      'John is a really great JavaScript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android.',
    showThumbnail: true,
  };
  data.push(userData);
} 

console.log(data)

const DisplayCards = () => {
    const [thumbnail, setThumbnail] = useState(data);

    //function for onPress
    const handleProfileCardPress = (index) => {
        setThumbnail(thumbnail.map((item, i) => 
            i === index ? { ...item, showThumbnail: !item.showThumbnail } : item )
        );
    }
    
    //mapping array of profile cards
    const list = thumbnail.map((item, index) => {
        const { image, name, occupation, description, showThumbnail } = item;

        return (
            <View style={styles.profileCardContainer} key={'card-' + index}>
                <ProfileCard
                    image={image}
                    name={name}
                    occupation={occupation}
                    description={description}
                    onPress={() => handleProfileCardPress(index)}
                    showThumbnail={showThumbnail} />
            </View>
        );
    });
    return ( <View style={styles.container}>{list}</View> );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        marginVertical: 20
    },
    profileCardContainer: {
        justifyContent: 'center',
        flexBasis: '30%',
        width: screenWidth / 2,
    },
  });

export default DisplayCards;