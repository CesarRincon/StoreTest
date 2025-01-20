import { StyleSheet } from 'react-native';

export const checkoutStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        width: "90%"
    },
    containerSteps: {
        width: "100%",
        height: 40,
        justifyContent: "center", alignItems: "center"
    },
    containerDotStep: {
        position: "absolute",
        left: 0,
        top: 10,
        alignItems: "center"
    },
    dotStep: {
        backgroundColor: "#015CA9",
        width: 20,
        height: 20,
        borderRadius: 24,
        zIndex: 999
    },
    dotTitle: {
        color: "#015CA9",
        fontWeight: "600"
    },
    containerDotStepRight: {
        position: "absolute",
        right: -7,
        alignItems: "center",
        top: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        letterSpacing: 2,
        marginTop: 10,
        color: "#015CA9",
        marginBottom: 5
    }
});