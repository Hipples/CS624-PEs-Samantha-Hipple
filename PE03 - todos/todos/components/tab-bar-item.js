import { Text, Pressable, StyleSheet } from 'react-native';

const TabBarItem = ({ border, title, selected, setType, type }) => (
    <Pressable
        onPress={setType}
        style={[
            styles.item,
            selected ? styles.selected : null,
            border ? styles.border : null,
            type === title ? styles.selected : null ]}>
        <Text style={[ styles.itemText, type === title ? styles.bold : null ]}>
            {title}
        </Text>
    </Pressable>
);

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1, 
        borderLeftColor: "#DDDDDD"
    },
    itemText: {
        color: "#777777",
        fontSize: 16
    },
    selected: {
        backgroundColor: "#FFFFFF"
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default TabBarItem;