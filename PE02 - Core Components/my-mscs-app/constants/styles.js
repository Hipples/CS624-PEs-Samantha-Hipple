import { StyleSheet } from 'react-native';

//theme for app
const SIZES = {
  xxsmall: 5,
  xsmall: 10,
  small: 15,
  medium: 20,
  large: 25,
  xlarge: 30,
  xxlarge: 40
}

const COLORS = {
    primary: "#02025C",     // marine
    secondary: "#02B5CF",  // teal
    tertiary: "#FC6FFF",  // pink

    gray: "#DDDDDD",
    offWhite: "#F5F5F5",
    white: "#FFFFFF",
    black: "#000000"
}

//all resuable styles for app found here
const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.offWhite,
      justifyContent: 'center',
      alignItems: 'stretch',
      paddingBottom: SIZES.small
    },
    //styles for title section
    titleSpace: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      paddingVertical: SIZES.xsmall,
      borderColor: COLORS.tertiary,
      borderBottomWidth: 3
    },
    titleText: {
      fontSize: SIZES.xlarge,
      textAlign: 'center',
      color: COLORS.offWhite
    },
    //styles for icon section
    iconSpace: {
      backgroundColor: COLORS.secondary,
      alignItems: 'center',
      padding: SIZES.xxlarge,
      borderBottomWidth: 3,
      borderColor: COLORS.tertiary
    },
    icon: {
      height: 250,
      width: 250,
      borderWidth: 3,
      borderColor: COLORS.tertiary,
      opacity: .9,
      resizeMode: 'center'
    },
    //styles for question & user input section
    questionSpace: {
      backgroundColor: COLORS.primary,
      paddingVertical: SIZES.xsmall,
      borderBottomWidth: 3,
      borderColor: COLORS.tertiary
    },
    questionText: {
      fontSize: SIZES.medium,
      color: COLORS.offWhite,
      paddingHorizontal: SIZES.xxsmall,
      paddingBottom: SIZES.xxsmall
    },  
    input: {
      height: SIZES.xxlarge,
      marginHorizontal: SIZES.small,
      borderColor: COLORS.secondary,
      borderWidth: 2,
      padding: SIZES.xxsmall, 
      backgroundColor: COLORS.white,
      fontSize: SIZES.small
    },
    //styles for course list section
    header: {
      color: COLORS.tertiary,
      fontSize: SIZES.large,
      backgroundColor: COLORS.primary,
      textAlign: 'center',
      borderBottomWidth: 3,
      borderTopWidth: 3,
      paddingVertical: SIZES.small,
      marginTop: SIZES.small,
      borderColor: COLORS.secondary
    },  
    courses: {
      fontSize: SIZES.small,
      marginTop: SIZES.small,
      lineHeight: SIZES.xlarge
    },
  
    modalView: {
      margin: SIZES.medium,
      backgroundColor: COLORS.gray,
      borderRadius: SIZES.xsmall,
      borderWidth: 3,
      borderColor: COLORS.primary,
      padding: SIZES.large,
    },
    modalHeader: {
      textAlign: 'center',
      fontSize: SIZES.xlarge,
      color: COLORS.secondary
    },
    modalTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: SIZES.medium,
      marginVertical: SIZES.medium
    },
    modalText: {
      textAlign: 'justify',
      fontSize: SIZES.small,
    },
    button: {
      alignItems: 'center',
      paddingVertical: SIZES.small,
      borderRadius: SIZES.xxsmall,
      borderWidth: 1,
      borderColor: COLORS.tertiary,
      backgroundColor: COLORS.primary,
      marginTop: SIZES.medium,
      elevation: SIZES.small
    },
    buttonText: {
      fontSize: SIZES.small,
      fontWeight: "bold",
      color: COLORS.white
    },
  
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default styles;