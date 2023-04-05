import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Samantha Hipple</Text>
            <Text>MSCS</Text>
            <Text>STC</Text>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff00',  // yellow background
        alignItems: 'center',
        justifyContent: 'center'
    }
});