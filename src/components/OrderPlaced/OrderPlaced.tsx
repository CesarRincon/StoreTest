import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { orderPlacedStyles } from "./OrderPlacedStyles"
import { generateOrderNumber } from '../utils/utils'
import useLinkTo from '../../hooks/useLinkTo'
import { useDispatch } from 'react-redux'
import { clearCart, handleCheckoutStep } from '../../redux/actions'

const OrderPlaced = () => {

    const [orderNumber, setOrderNumber] = useState<string>('')

    const { linkTo } = useLinkTo()
    const dispatch = useDispatch();

    useEffect(() => {
        const order = generateOrderNumber()
        setOrderNumber(order)
    }, [])

    const handleSubmitContinue = () => {
        setOrderNumber('')
        linkTo('home')
        dispatch(handleCheckoutStep(0))
        dispatch(clearCart())
    }


    return (
        <View style={orderPlacedStyles.container}>
            <View style={orderPlacedStyles.containerImageSuccessful}>
                <Image source={{ uri: "https://img.icons8.com/ios-glyphs/240/015CA9/checkmark--v1.png" }} width={90} height={90} />
                <Text style={orderPlacedStyles.textImageSuccessful}>Successful!</Text>
            </View>
            <View style={orderPlacedStyles.containerInformationOrder}>
                <View style={orderPlacedStyles.contentInformationOrder}>
                    <Text style={orderPlacedStyles.textInformationOrder}>Your order number is</Text>
                    {
                        orderNumber &&
                        <Text style={{
                            ...orderPlacedStyles.textInformationOrder, color: "#015CA9",
                            fontWeight: "600"
                        }}>
                            #{orderNumber}
                        </Text>
                    }
                </View>
                <Text style={orderPlacedStyles.textInformationOrder}>You will receive the order confirmation email shortly</Text>
                <Text style={{
                    ...orderPlacedStyles.textInformationOrder, fontWeight: "600"
                }}>
                    Thank you for shopping with us
                </Text>
            </View>
            <TouchableOpacity
                style={orderPlacedStyles.containerButton}
                onPress={() => handleSubmitContinue()}
            >
                <Text style={orderPlacedStyles.textButton}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderPlaced