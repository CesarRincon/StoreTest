import { StyleSheet } from 'react-native';

export const productShowCaseStyles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 20,
        height: 320,
        alignItems: "center",
        justifyContent: "center"
    },
    containerHeaderShowCase: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    textTitle: {
        color: "#000"
    },
    containerFlatList: {
        borderBottomColor: "#F0F0F0",
        borderBottomWidth: 1,
        marginBottom: 20,
    }
});