import { StyleSheet } from 'react-native';

export const searchStyles = StyleSheet.create({
    container: {
        height: 70,
        padding: 5,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
        justifyContent: "center",
        paddingLeft: 5
    },
    containerIconSearch: {
        backgroundColor: "#000",
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    }
});