import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SIZES = {
  xsmall: 10,
  small: 15,
  medium: 20,
  large: 25,
  xlarge: 30,
  xxlarge: 40
}

const COLORS = {
    primary: "#02025C",     // marine
    secondary: "#02B5C2",  // teal
    tertiary: "#FC03DF",  // pink

    gray: "#AAAAAA",
    offWhite: "#F2F2F2",
    white: "#FFFFFF"
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.offWhite,
      justifyContent: 'center',
      alignItems: 'stretch',
      borderWidth: 3,
      borderColor: COLORS.primary,
      borderTopRightRadius: 35,  // this was just to match shape of my phone
      borderTopLeftRadius: 35
    },
  
    titleSpace: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      padding: SIZES.xsmall,
      borderColor: COLORS.tertiary,
      borderBottomWidth: 3
    },
    titleText: {
      fontSize: SIZES.xlarge,
      textAlign: 'center',
      color: COLORS.secondary
    },
  
    iconSpace: {
      backgroundColor: COLORS.secondary,
      alignItems: 'center',
      padding: SIZES.xxlarge
    },
    icon: {
      height: 250,
      width: 250,
      borderWidth: 5,
      tintColor: Colors.tertiary,
      opacity: .8,
      resizeMode: 'center'
    },
  
    question: {
      backgroundColor: COLORS.primary,
      borderTopWidth: 3,
      borderBottomWidth: 3,
      borderColor: COLORS.tertiary
    },
  
    input: {
      height: SIZES.xlarge,
      marginHorizontal: SIZES.small,
      marginBottom: 5,
      borderWidth: 1, 
      padding: SIZES.small,
      backgroundColor: COLORS.white
    },
  
    header: {
      color: COLORS.tertiary,
      fontSize: SIZES.large,
      fontWeight: 'bold',
      backgroundColor: COLORS.primary,
      textAlign: 'center',
      borderBottomWidth: 2,
      borderTopWidth: 2,
      lineHeight: SIZES.xxlarge,
      marginTop: SIZES.small,
      borderStyle: 'dashed',
      borderColor: COLORS.tertiary
    },
  
    courses: {
      fontSize: SIZES.small,
      marginTop: 5,
      lineHeight: SIZES.xlarge
    },
  
    modalView: {
      margin: SIZES.medium,
      backgroundColor: COLORS.gray,
      borderRadius: SIZES.xsmall,
      padding: SIZES.xlarge,
      alignItems: 'center',
    },
  
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: SIZES.medium,
    }
});

export default styles;