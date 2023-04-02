import { View, TextInput, Text, Button } from "react-native";
import mainStyles from "../constants/mainStyles";

const Donate = () => {
    return (
        <View>
            <Text style={mainStyles.title}>Thank you for choosing to donate!</Text>
            <Text style={mainStyles.label}>Enter amount you'd like to donate</Text>
            <TextInput style={mainStyles.input} />
            <Button title="Pay" />
        </View>
    );
}

export default Donate;