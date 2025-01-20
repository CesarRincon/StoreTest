import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useCartPetitions from '../../hooks/useCartPetitions'
import { quantitySelectorStyles } from './QuantitySelectorStyles'

const QuantitySelector = ({ item }: any) => {

    const { increment, decrement, removeProductHandler, quantity } = useCartPetitions(item)

    return (
        <View style={quantitySelectorStyles.container}>
            <View style={quantitySelectorStyles.containerButtons}>
                <TouchableOpacity
                    style={{
                        ...quantitySelectorStyles.buttonQuantity, opacity: quantity === 1 ? 0.7 : 1
                    }}
                    testID='decrement'
                    disabled={quantity === 1 ? true : false}
                    onPress={() => decrement()}
                >
                    <Text style={quantitySelectorStyles.textButtons}>-</Text>
                </TouchableOpacity>
                <Text style={{
                    borderWidth: 1,
                    borderColor: "#000",
                    width: 100,
                    height: 30,
                    borderRadius: 8,
                    textAlign: "center",
                    paddingTop: 5
                }}
                    testID='quantity-text'
                >{quantity}</Text>
                <TouchableOpacity
                    style={quantitySelectorStyles.buttonQuantity}
                    onPress={() => increment()}
                    testID='increment'
                >
                    <Text style={quantitySelectorStyles.textButtons}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={quantitySelectorStyles.containerButtonRemove}
                onPress={() => removeProductHandler()}
            >
                <Image source={{ uri: "https://img.icons8.com/material-outlined/24/FFFFFF/trash--v1.png" }} width={25} height={25} />
            </TouchableOpacity>
        </View>
    )
}

export default QuantitySelector