import { StyleSheet } from 'react-native';

export const totalizerStyles = StyleSheet.create({
    container: {
        height: 90,
        borderTopWidth: 1,
        borderColor: "#969596",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    textTotalizer: {
        fontSize: 24,
        fontWeight: "600",
        color: "#000"
    },
    containerButton: {
        backgroundColor: "#000",
        height: 50,
        width: 150,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    }
});