import { StyleSheet } from 'react-native';

export const shippingModalStyles = StyleSheet.create({
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerModal: {
        width: "90%",
        height: "auto",
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 40,
        alignItems: "center",
        maxHeight: "80%",
    },
    containerButtonClose: {
        backgroundColor: "#000",
        width: 30,
        height: 30,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 10,
        top: 10
    }
});