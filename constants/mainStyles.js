import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 30,
        padding: 10,
        paddingTop: 20
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 20,
        borderRadius: 15
    },
    textArea: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 20,
        borderRadius: 15,
        height: 200,
        textAlignVertical: 'top'
    },
    label: {
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 10,
        fontFamily: 'Raleway'
    },
    error: {
        color: 'red',
        textAlign: 'center',
        padding: 20,
        fontSize: 20
    },
    response: {
        textAlign: 'center',
        padding: 20
    },
    subtitle: {
        textAlign: 'center'
    },
    subInput: {
        paddingLeft: 20,
        color: 'grey'
    }
});

export default mainStyles;