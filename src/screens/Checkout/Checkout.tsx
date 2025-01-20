import { View, Text } from 'react-native'
import React, { useState } from 'react'
import OrderPlaced from '../../components/OrderPlaced/OrderPlaced';
import Payment from '../../components/Payment/Payment';
import Toast from '../../components/Toast/Toast';
import { useSelector } from 'react-redux';
import { checkoutStyles } from './CheckoutStyles';


const Checkout = () => {
    const { checkoutManager } = useSelector((state: RootState) => state);

    const { step } = checkoutManager;

    return (
        <View style={checkoutStyles.container}>
            <View style={{ height: 70, justifyContent: "center", alignItems: "center", width: "100%", }}>
                <View style={checkoutStyles.containerSteps}>
                    <View
                        style={checkoutStyles.containerDotStep}
                    >
                        <View style={checkoutStyles.dotStep} />
                        <Text style={checkoutStyles.dotTitle}>Payment</Text>
                    </View>
                    <View />
                    <View
                        style={{
                            width: "80%",
                            height: 2,
                            backgroundColor: step === 0 ? "#ccc" : '#015CA9',
                            marginHorizontal: 5,
                        }}
                    />
                    <View
                        style={checkoutStyles.containerDotStepRight}
                    >
                        <View style={{
                            ...checkoutStyles.dotStep,
                            backgroundColor: step === 0 ? "#ccc" : '#015CA9'
                        }} />
                        <Text
                            style={{
                                ...checkoutStyles.dotTitle,
                                color: step === 0 ? "#ccc" : '#015CA9'
                            }}
                        >Confirmation</Text>
                    </View>
                </View>
            </View>
            <Text style={checkoutStyles.title}>
                {step === 0 ? "Payment" : "Confirmation"}
            </Text>
            {
                step === 0 ?
                    <Payment />
                    :
                    <OrderPlaced />
            }
            <Toast />
        </View >
    )
}

export default Checkout