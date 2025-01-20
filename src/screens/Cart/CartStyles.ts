import { StyleSheet } from 'react-native';

export const cartStyles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 10,
        flex: 1
    },
    containerCartEmpty: {
        justifyContent: "center", alignItems: "center"
    },
    titleEmpty: {
        color: "#000"
    },
    containerButtonBackHome: {
        backgroundColor: "#000",
        borderRadius: 8,
        height: 50,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    textButtonBackHome: {
        color: "#ffff", fontSize: 16, fontWeight: "600"
    }
});