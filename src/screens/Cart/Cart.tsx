import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import Totalizer from '../../components/Totalizer/Totalizer';
import { cartStyles } from './CartStyles';
import useLinkTo from '../../hooks/useLinkTo';

const Cart = () => {

    const { cart } = useSelector((state: RootState) => state);
    const { products } = cart;
    const flatListRef = useRef<FlatList>(null)
    const { linkTo } = useLinkTo()

    return (
        <View style={cartStyles.container}>
            {
                products?.length === 0 ?
                    <View style={cartStyles.containerCartEmpty}>
                        <Image source={{ uri: "https://img.icons8.com/windows/32/00000/fast-cart.png" }} width={50} height={50} />
                        <Text style={cartStyles.titleEmpty}>Your cart is empty.</Text>
                        <TouchableOpacity
                            style={cartStyles.containerButtonBackHome}
                            onPress={() => linkTo('home')}
                        >
                            <Text style={cartStyles.textButtonBackHome}>Go to Home</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <FlatList
                        horizontal={false}
                        ref={flatListRef}
                        data={products}
                        keyExtractor={(item, index) => `${item?.id} + ${index}`}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        initialNumToRender={10}
                        renderItem={(product) => <ProductCard product={product} mode="cart" />}
                    />
            }
            {
                products?.length > 0 &&
                <Totalizer />
            }
        </View>
    )
}

export default Cart