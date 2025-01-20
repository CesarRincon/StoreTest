import { StyleSheet } from 'react-native';

export const quantitySelectorStyles = StyleSheet.create({
    container: {
        width: "95%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    containerButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    buttonQuantity: {
        backgroundColor: "#000",
        width: 30,
        height: 30,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    textButtons: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600"
    },
    containerButtonRemove: {
        backgroundColor: "#000",
        height: 30,
        width: 30,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    }
});