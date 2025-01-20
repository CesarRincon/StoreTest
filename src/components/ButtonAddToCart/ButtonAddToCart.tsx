import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, handleModal } from '../../redux/actions';
import { buttonAddStyles } from './ButtonAddToCartStyles'

const ButtonAddToCart = (props: any) => {
    const { product } = props;
    const dispatch = useDispatch();
    const { customerInfo, cart } = useSelector((state: RootState) => state);
    const productInCart = cart?.products?.some((item: any) => product.id === item.id)

    const addToCart = () => {
        if (productInCart) return
        if (!customerInfo.email) {
            dispatch(handleModal(true));
        } else {
            dispatch(addProduct({
                id: product.id,
                title: product.title,
                image: product.image,
                availableQuantity: product.rating.count,
                price: product.price,
                quantity: 1
            }));
        }
    };

    return (
        <TouchableOpacity
            testID="add-to-cart-button"
            style={{
                ...buttonAddStyles.container, opacity: productInCart ? 0.5 : 1
            }}
            onPress={() => addToCart()}
            disabled={productInCart}
        >
            <Text style={buttonAddStyles.text}>{productInCart ? "Added" : "Add"}</Text>
        </TouchableOpacity>
    )
}

export default ButtonAddToCart