import { View, Text, Image } from 'react-native'
import React from 'react'
import ButtonAddToCart from '../../../ButtonAddToCart/ButtonAddToCart'
import { showCaseModeStyles } from './ShowCaseModeStyles';

const ShowCaseMode = (props: any) => {
    const { item } = props;
    return (
        <View style={showCaseModeStyles.container} testID="showcase-mode">
            <Image source={{ uri: item?.image }} width={90} height={100} resizeMode='contain' />
            <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={showCaseModeStyles.textTitle}
            >{item?.title}</Text>
            <View
                style={showCaseModeStyles.containerPrice}
            >
                <Text
                    style={showCaseModeStyles.textPrice}
                > $ {item.price}</Text>
            </View>
            <ButtonAddToCart product={item} />
        </View >
    )
}

export default ShowCaseMode