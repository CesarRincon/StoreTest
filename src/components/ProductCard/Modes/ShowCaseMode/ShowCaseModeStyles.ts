import { StyleSheet } from 'react-native';

export const showCaseModeStyles = StyleSheet.create({
    container: {
        width: 160,
        height: 260,
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
    },
    textTitle: {
        height: 35,
        fontSize: 14,
        width: "100%"
    },
    containerPrice: {
        width: "100%",
        height: 50
    },
    textPrice: {
        fontSize: 18
    }
});