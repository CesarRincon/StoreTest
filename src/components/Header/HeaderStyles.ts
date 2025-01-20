import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 70,
        width: "100%"
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "600"
    },
    titleScreen: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        textTransform: "capitalize",
        width: 90,
        textAlign: "center"
    },
    containerIconCart: {
        backgroundColor: "#fff",
        borderRadius: 24,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    containerBadgeCart: {
        backgroundColor: "red",
        width: 20,
        height: 20,
        position: "absolute",
        top: -8,
        right: -8,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    texNumberBadge: {
        color: "#fff"
    },
    containerIconClearCart: {
        backgroundColor: "#fff",
        borderRadius: 24,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    }
});