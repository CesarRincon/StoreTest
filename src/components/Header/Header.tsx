import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import useLinkTo from '../../hooks/useLinkTo';
import useCartPetitions from '../../hooks/useCartPetitions';
import { headerStyles } from './HeaderStyles';

const Header = () => {
    const { cart, activeScreen, checkoutManager } = useSelector((state: RootState) => state);

    const { linkTo } = useLinkTo()

    const { clearCartHandler } = useCartPetitions()

    const iconManager: any = {
        home: <TouchableOpacity
            style={headerStyles.containerIconCart}
            onPress={() => linkTo("cart")}
            testID="cart-button"
        >
            <Image
                source={{ uri: "https://img.icons8.com/dotty/80/shopping-cart.png" }}
                width={30}
                height={30}
                testID="cart-icon"
            />
            {
                cart?.products?.length > 0 &&
                <View style={headerStyles.containerBadgeCart}>
                    <Text style={headerStyles.texNumberBadge}>
                        {cart?.products?.length}
                    </Text>
                </View>
            }
        </TouchableOpacity>,
        cart: <TouchableOpacity
            style={headerStyles.containerIconClearCart}
            onPress={() => clearCartHandler()}
        >
            <Image
                source={{ uri: "https://img.icons8.com/material-outlined/24/00000/trash--v1.png" }}
                width={30}
                height={30}
                testID="clear-cart-icon"
            />
        </TouchableOpacity>,

    }

    return (
        <View style={headerStyles.container}>
            {
                activeScreen === "home" ?
                    <Text style={headerStyles.title}>
                        StoreTest
                    </Text>
                    :
                    <View style={{
                        flexDirection: "row",
                        width: checkoutManager.step !== 1 ? "90%" : "100%",
                    }}>

                        {
                            checkoutManager.step !== 1 &&
                            <TouchableOpacity
                                onPress={() => linkTo("home")}
                                testID="back-button"

                            >
                                <Image
                                    source={{ uri: "https://img.icons8.com/sf-black-filled/64/FFFFFF/back.png" }}
                                    width={30}
                                    height={30}
                                    testID="back-icon"

                                />
                            </TouchableOpacity>
                        }
                        <View style={{ flex: 1 }}>
                            <Text style={{ ...headerStyles.titleScreen, alignSelf: "center" }}>{activeScreen}</Text>
                        </View>
                    </View>
            }
            {iconManager[activeScreen]}
        </View >
    )
}

export default Header