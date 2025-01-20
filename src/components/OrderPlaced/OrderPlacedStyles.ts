import { StyleSheet } from 'react-native';

export const orderPlacedStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "90%",
        flex: 1
    },
    containerImageSuccessful: {
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        width: "90%"
    },
    textImageSuccessful: {
        color: "#015CA9",
        fontWeight: "600",
        fontSize: 18
    },
    containerInformationOrder: {
        height: "30%",
        width: "90%",
        gap: 15
    },
    contentInformationOrder: {
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        justifyContent: "center"
    },
    textInformationOrder: {
        fontSize: 16,
        textAlign: "center",
        color: "#000"
    },
    containerButton: {
        width: "90%",
        height: 50,
        backgroundColor: "#015CA9",
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    }
});