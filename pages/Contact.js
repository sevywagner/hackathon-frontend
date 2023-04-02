import { ScrollView, View, TextInput, StyleSheet, Text, Button, Pressable } from "react-native";
import { useState } from "react";
import mainStyles from "../constants/mainStyles";

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const [error, setError] = useState();
    const [response, setResponse] = useState();

    const nameChangeHandler = (enteredText) => {
        setName(enteredText);
    }

    const emailChangeHandler = (enteredText) => {
        setEmail(enteredText);
    }

    const messageChangeHandler = (enteredText) => {
        setMessage(enteredText);
    }

    const submitHandler = () => {
        let error = false;

        fetch('https://blood-app-backend.herokuapp.com/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                message: message
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (!response.ok) {
                error = true;
            }
            return response.json();
        }).then((data) => {
            if (error) {
                setError(data.error);
                setResponse(null)
            } else {
                setResponse(data.message);
                setError(null);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <ScrollView>
            <Text style={mainStyles.title}>Get in touch with Us</Text>
            {error && <Text style={mainStyles.error}>{error}</Text>}
            {response && <Text style={mainStyles.response}>{response}</Text>}
            <View style={styles.shadow}>
                <ScrollView style={styles.form}>
                    <Text style={mainStyles.label}>Name</Text>
                    <TextInput style={mainStyles.input} onChangeText={nameChangeHandler} />
                    <Text style={mainStyles.label}>Email</Text>
                    <TextInput style={mainStyles.input} onChangeText={emailChangeHandler} />
                    <Text style={mainStyles.label}>Message</Text>
                    <TextInput 
                        style={mainStyles.textArea} 
                        multiline={true}
                        numberOfLines={10} 
                        onChangeText={messageChangeHandler} 
                    />
                    <Pressable onPress={submitHandler} style={({ pressed }) => !pressed ? styles.button : styles.buttonPressed} title="Submit">
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginBottom: 15
    },
    buttonText: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    buttonPressed: {
        alignItems: 'center',
        marginBottom: 15,
        opacity: .3
    },
    form: {
        margin: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    shadow: {
        shadowColor: 'black',
        shadowOpacity: .4,
        shadowOffset: { width: 8, height: 10 },
    }
});

export default Contact;