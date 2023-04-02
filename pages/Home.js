import { View, Text, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import QuickAction from "../components/home/QuickAction";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        Montserrat: require('./../assets/Montserrat-VariableFont_wght.ttf'),
        Raleway: require('./../assets/Raleway-VariableFont_wght.ttf')
    });

    if (!loaded) {
        return null;
    }

    const contactHandler = () => {
        navigation.navigate('Contact');
    }

    const appointmentsHandler = () => {
        navigation.navigate('Appointments');
    }

    const eventsHandler = () => {
        navigation.navigate('Book');
    }

    const donateHandler = () => {
        navigation.navigate('Donate');
    }

    return (
        <View>
            <View>
                <View style={styles.row}>
                    <QuickAction title='Contact' onPress={contactHandler} iconName='envelope' />
                    <QuickAction title='Appointments' onPress={appointmentsHandler} iconName='truck' />
                </View>
                <View style={styles.row}>
                    <QuickAction title='Donate' onPress={donateHandler} iconName='dollar' />
                    <QuickAction title='Events' onPress={eventsHandler} iconName='calendar-o' />
                </View>
            </View>
            <Text style={styles.mission}>Help supply hospitals with blood</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mission: {
        fontFamily: 'Montserrat',
        fontSize: 30,
        textAlign: 'center',
        padding: 30
    },
    row: {
        flexDirection: 'row'
    }
});

export default Home;