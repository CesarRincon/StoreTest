import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { splashScreenStyles } from './SplasScreenStyles';

const SplashScreen = ({ onFinish }: any) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2000);


        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <View style={splashScreenStyles.container}>
            <Image source={{ uri: "https://cdn.dribbble.com/users/236204/screenshots/1497679/storefront-03-gif.gif" }} width={150} height={150} />
            <Text style={splashScreenStyles.text}>Bienvenido a Mi App</Text>
        </View>
    );
};

export default SplashScreen;
