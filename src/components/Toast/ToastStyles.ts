import { StyleSheet } from 'react-native';

export const toastStyles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
    },
    toastText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    }
});