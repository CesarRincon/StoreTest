import { View, Text, Image } from 'react-native'
import React from 'react'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart';
import ShowCaseMode from './Modes/ShowCaseMode/ShowCaseMode';
import CartMode from './Modes/CartMode/CartMode';

const ProductCard = (props: any) => {
    const { product: { item }, mode } = props;

    const modes: any = {
        showCase: <ShowCaseMode item={item} />,
        cart: <CartMode item={item} />
    }

    return modes[mode]
}

export default ProductCard