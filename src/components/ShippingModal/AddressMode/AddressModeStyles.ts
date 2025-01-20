import { StyleSheet } from 'react-native';

export const addressModeStyles = StyleSheet.create({
    scrollView: {
        width: "100%"
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 10,
        color: "#000"
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        color: "#000"
    },
    containerInput: {
        gap: 2,
        marginVertical: 5,
        width: "90%"
    },
    labelInput: {
        color: "#000",
        fontWeight: "600"
    },
    containerDropdown: {
        gap: 2,
        marginVertical: 5,
        width: "90%"
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ccc",
        height: 40,
        paddingLeft: 5,
        width: "100%",
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
    },
    dropDownPaymentMethod: {
        height: "auto",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ccc",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        flexDirection: "row"
    },
    containerInputs: {
        gap: 2,
        marginVertical: 5
    },
    containerDropdownItems: {
        padding: 5,
        height: "auto",
        maxHeight: 200,
        backgroundColor: "#F9F8F8",
        marginTop: 5,
        borderRadius: 8,
    },
    contentContainerDropdownItems: {
        justifyContent: "space-between",
        height: "auto",
    },
    item: {
        height: 40,
        justifyContent: "center",
        paddingLeft: 10,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 8
    },
    textError: {
        color: "red"
    }
});