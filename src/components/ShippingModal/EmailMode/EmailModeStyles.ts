import { StyleSheet } from 'react-native';

export const emailModeStyles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 10
    },
    description: {
        fontSize: 14,
        textAlign: "center"
    },
    textInput: {
        width: "90%",
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 10,
        color: "#000"
    },
    containerButton: {
        backgroundColor: "#000",
        width: "90%",
        height: 40,
        marginTop: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16
    }
});