import { StyleSheet } from 'react-native';

export const cartModeStyles = StyleSheet.create({
    container: {
        width: "98%",
        height: 160,
        gap: 10,
        marginHorizontal: 5,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        marginBottom: 20,
        flexDirection: "row",
        overflow: 'hidden',
    },
    containerInfo: { width: 240 },
    textTitle: {
        height: 35,
        fontSize: 14,
        width: "90%"
    },
    containerPrice: {
        width: "100%",
        height: 50,
        marginTop: 15
    },
    textPrice: {
        fontSize: 18
    }
});