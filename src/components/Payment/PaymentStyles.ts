import { StyleSheet } from 'react-native';

export const paymentStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 20,
    },
    sectionContainer: {
        width: "98%",
        height: 130,
        marginTop: 10,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    titleSection: {
        marginBottom: 10,
        color: "#015CA9",
        fontWeight: "600",
        fontSize: 16,

    },
    text: {
        color: "#000"
    },
    containerTextNote: {
        flexDirection: "row",
        gap: 5
    },
    titleNote: {
        fontWeight: "600",
        color: "#000"
    },
    dropDownPaymentMethod: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ccc",
        marginTop: 15,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        flexDirection: "row"
    },
    containerInputs: {
        gap: 2,
        marginVertical: 5
    },
    labelInput: {
        color: "#000",
        fontWeight: "600"
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ccc",
        height: 40,
        paddingLeft: 5,
        color: "#000"
    },
    containerItemsPrices: {
        width: "98%",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
        padding: 10
    },
    separator: {
        backgroundColor: "#eee",
        height: 2,
        width: "90%",
        marginVertical: 15
    },
    containerTotal: {
        height: 40,
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textTotal: {
        fontSize: 24,
        color: "#000"
    },
    containerButtonPay: {
        backgroundColor: "#015CA9",
        height: 40,
        width: 120,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    textButtonPay: {
        fontSize: 20,
        fontWeight: 600,
        color: "#fff"
    },
    buttonSave: {
        backgroundColor: "#015CA9",
        height: 40,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    textButtonSave: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600"
    },
    containerDropdownItems: {
        padding: 5,
        height: "auto",
        backgroundColor: "#F9F8F8",
        marginTop: 5,
        borderRadius: 8
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
    }
});