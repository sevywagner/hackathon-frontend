import { Pressable, Text, StyleSheet } from "react-native";

const TimeBox = ({ isSelected, time, date, onPress }) => {
    return (
        <Pressable onPress={onPress} style={isSelected ? styles.selected : styles.root}>
            <Text style={[styles.time, isSelected ? { color: 'white' } : { color: 'black' }]}>{time}</Text>
            <Text style={isSelected ? { color: 'white' } : { color: 'black' }}>{date.toDateString()}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 30,
        padding: 10,
        borderRadius: 15
    },
    selected: {
        backgroundColor: 'black',
        alignItems: 'center',
        margin: 30,
        padding: 10,
        borderRadius: 15
    },
    time: {
        fontSize: 50,
        fontFamily: 'Montserrat'
    }
});

export default TimeBox;