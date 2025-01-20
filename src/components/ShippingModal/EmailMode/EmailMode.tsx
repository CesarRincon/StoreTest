import { Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveCustomerInfo } from '../../../redux/actions';
import { emailModeStyles } from './EmailModeStyles';
const EmailMode = () => {
    const { customerInfo } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const handleSubmitEmail = () => {
        if (email) {
            dispatch(saveCustomerInfo({
                ...customerInfo,
                email: email
            }));
        }
    }

    return (
        <>
            <Image source={{ uri: "https://img.icons8.com/ios/100/shopping-bag--v1.png" }} width={45} height={45} />
            <Text style={emailModeStyles.title}>Primero, tu correo electrónico</Text>
            <Text
                style={emailModeStyles.description}
            >Tranquilo, tu correo estará seguro con nosotros. Lo usamos solo para información de envío.</Text>
            <TextInput
                placeholder='Email'
                style={emailModeStyles.textInput}
                placeholderTextColor={"#c0c0c0"}
                onChangeText={(value: string) => setEmail(value)}
            />
            <TouchableOpacity
                style={emailModeStyles.containerButton}
                onPress={() => handleSubmitEmail()}
            >
                <Text style={emailModeStyles.textButton}>Continue</Text>
            </TouchableOpacity>
        </>
    )
}

export default EmailMode