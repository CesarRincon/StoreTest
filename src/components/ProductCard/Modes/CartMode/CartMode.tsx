import { View, Text, Image } from 'react-native'
import React from 'react'
import QuantitySelector from '../../../QuantitySelector/QuantitySelector';
import { cartModeStyles } from './CartModeStyles';

const CartMode = (props: any) => {
    const { item } = props

    return (
        <View style={cartModeStyles.container} testID="cart-mode">
            <Image source={{ uri: item?.image }} width={90} height={100} resizeMode='contain' />
            <View style={cartModeStyles.containerInfo}>
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={cartModeStyles.textTitle}
                >{item?.title}</Text>
                <View
                    style={cartModeStyles.containerPrice}
                >
                    <Text
                        style={cartModeStyles.textPrice}
                    > $ {item.price}</Text>
                </View>
                <QuantitySelector item={item} />
            </View>
        </View >
    )
}

export default CartMode