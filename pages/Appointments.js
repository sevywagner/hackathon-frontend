import { View, Text, StyleSheet } from "react-native";
import mainStyles from "../constants/mainStyles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Appointments = () => {
    return (
        <View>
            <Text style={mainStyles.title}>Here's how it Works...</Text>
            <View style={styles.row}>
                <MaterialCommunityIcons name="truck" size={100} color='black' />
                <Text style={styles.text}>We come to you</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>No more waiting rooms</Text>
                <MaterialCommunityIcons name="clock" size={100} color='black' />
            </View>
            <Text style={styles.pg}>Every year there is a blood shortage and a big part of that is the inconvinence of needing to go to a clinic, sometimes search for the right office, then wait in a waiting room all to DONATE. Our mission is to raise the supply by adding a convience factor to donating.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20
    },
    pg: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Raleway',
        padding: 20
    }
});

export default Appointments;