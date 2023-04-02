import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from '@react-native-community/datetimepicker'
import mainStyles from "../constants/mainStyles";
import { useState } from "react";

const Book = () => {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState();
    const [numOfPeople, setNumOfPeople] = useState();
    const [location, setLocation] = useState();
    const [time, setTime] = useState();
    const [email, setEmail] = useState();

    const nameChangeHandler = (enteredText) => {
        setName(enteredText);
    }

    const dateChangeHandler = (event, selectedDate) => {
        setDate(selectedDate);
    }

    const numOfPeopleChangeHandler = (enteredText) => {
        setNumOfPeople(enteredText);
    }

    const locationChangeHandler = (enteredText) => {
        setLocation(enteredText);
    }

    const timeChangeHandler = (enteredText) => {
        setTime(enteredText);
    }

    const emailChangeHandler = (enteredText) => {
        setEmail(enteredText);
    }

    const submitHandler = () => {
        let error = false;

        console.log(name);

        fetch('https://hackathon-backend.herokuapp.com/orders', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                address: location,
                email,
                date,
                time,
                numOfPeople,
            })
        }).then((response) => {
            if (!response.ok) {
                error = true;
            }
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch(err => console.log(err));
    }

    return (
        <KeyboardAwareScrollView style={styles.root}>
            <Text style={mainStyles.title}>Book an Event</Text>
            <Text style={mainStyles.subtitle}>Events must be booked 2 weeks in advance</Text>
            <View style={styles.wrap}>
                <DateTimePicker
                    value={date}
                    onChange={dateChangeHandler}
                    minimumDate={new Date()}
                />
            </View>
            <Text style={mainStyles.label}>Name</Text>
            <TextInput style={mainStyles.input} onChangeText={nameChangeHandler} />
            <Text style={mainStyles.label}>Estimated Number of People</Text>
            <TextInput keyboardType="numeric" style={mainStyles.input} onChangeText={numOfPeopleChangeHandler} />
            <Text style={mainStyles.label}>Location</Text>
            <TextInput style={mainStyles.input} onChangeText={locationChangeHandler} />
            <Text style={mainStyles.label}>Time Range</Text>
            <TextInput style={mainStyles.input} onChangeText={timeChangeHandler} />
            <Text style={mainStyles.subInput}>XX:XX - XX:XX</Text>
            <Text style={mainStyles.label}>Email</Text>
            <TextInput style={mainStyles.input} onChangeText={emailChangeHandler} />
            <Button title='Submit' onPress={submitHandler} />
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        paddingBottom: 100
    },
    wrap: {
        alignItems: 'center',
        padding: 20
    }
});

export default Book;