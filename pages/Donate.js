import { View, TextInput, Text, Button } from "react-native";
import mainStyles from "../constants/mainStyles";
import { useState } from "react";

const Donate = () => {
    // const submitHandler = async () => {
    //     const response = fetch()
    // }

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