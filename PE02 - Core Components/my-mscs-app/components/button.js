import { Pressable, Text } from 'react-native';

import styles from '../constants/styles.js';

//reusable custom button component
export default Button = (props) => {
    const { onPress, title = "Close" } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}