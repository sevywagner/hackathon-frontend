import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, Image } from 'react-native';

const QuickAction = ({ iconName, title, onPress }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => {
            if (pressed) {
                return styles.rootPressed
            } else {
                return styles.root
            }
        }}>
            <FontAwesome name={iconName} size={80} />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderRadius: 10,
        width: '40%',
        margin: '5%',
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: .5
    },
    rootPressed: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderRadius: 10,
        width: '40%',
        margin: '5%',
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: .5,
        opacity: .5
    },
    image: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 17
    }
});

export default QuickAction;