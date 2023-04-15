import { StyleSheet } from 'react-native';

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

    gray: "#DDDDDD",
    offWhite: "#F2F2F2",
    white: "#FFFFFF",
    black: "#000000"
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.offWhite,
      justifyContent: 'center',
      alignItems: 'stretch',
      paddingBottom: SIZES.small
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
      color: COLORS.white
    },
  
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
      opacity: .8,
      resizeMode: 'center'
    },
  
    questionSpace: {
      backgroundColor: COLORS.primary,
      borderBottomWidth: 3,
      borderColor: COLORS.tertiary
    },
    questionText: {
      fontSize: SIZES.medium,
      color: COLORS.white,
      padding: 5
    },
  
    input: {
      height: SIZES.xxlarge,
      marginHorizontal: SIZES.small,
      marginBottom: 5,
      borderColor: COLORS.secondary,
      borderWidth: 2,
      padding: 5, 
      backgroundColor: COLORS.white
    },
  
    header: {
      color: COLORS.tertiary,
      fontSize: SIZES.large,
      backgroundColor: COLORS.primary,
      textAlign: 'center',
      borderBottomWidth: 3,
      borderTopWidth: 3,
      lineHeight: SIZES.xxlarge,
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
      padding: SIZES.xlarge,
    },
    modalHeader: {
      textAlign: 'center',
      fontSize: SIZES.large,
      fontWeight: "bold",
    },
    modalTitle: {
      textAlign: 'center',
      fontSize: SIZES.medium,
    },
    modalText: {
      textAlign: 'justify',
      fontSize: 13
    },
    button: {
      alignItems: 'center',
      paddingVertical: SIZES.small,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: COLORS.tertiary,
      backgroundColor: COLORS.primary,
      elevation: 10
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