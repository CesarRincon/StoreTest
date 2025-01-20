import { Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveCustomerInfo } from '../../../redux/actions';
import { emailModeStyles } from './EmailModeStyles';
const EmailMode = () => {
    const { customerInfo } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const [error, setError] = useState<boolean>(false)

    const [email, setEmail] = useState('')
    const handleSubmitEmail = () => {
        if (email) {
            dispatch(saveCustomerInfo({
                ...customerInfo,
                email: email
            }));
        } else {
            setError(true)
        }
    }

    return (
        <>
            <Image source={{ uri: "https://img.icons8.com/ios/100/shopping-bag--v1.png" }} width={45} height={45} />
            <Text style={emailModeStyles.title}>First, your email address.</Text>
            <Text
                style={emailModeStyles.description}
            >Don't worry, your email will be safe with us. We only use it for shipping information.</Text>
            <TextInput
                testID='email-input'
                placeholder='Email'
                style={emailModeStyles.textInput}
                placeholderTextColor={"#c0c0c0"}
                onChangeText={(value: string) => setEmail(value)}
            />
            {
                error &&
                <Text
                    style={emailModeStyles.textError}
                >Please fill in all the fields.</Text>
            }
            <TouchableOpacity
                testID='submit-button'
                style={emailModeStyles.containerButton}
                onPress={() => handleSubmitEmail()}
            >
                <Text style={emailModeStyles.textButton}>Continue</Text>
            </TouchableOpacity>
        </>
    )
}

export default EmailMode