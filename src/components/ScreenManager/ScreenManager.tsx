import React from 'react'
import Home from '../../screens/Home/Home'
import Cart from '../../screens/Cart/Cart'
import { useSelector } from 'react-redux'
import Checkout from '../../screens/Checkout/Checkout'

const ScreenManager = () => {
    const activeScreen = useSelector((state) => state?.activeScreen);

    const screens: any = {
        home: <Home />,
        cart: <Cart />,
        checkout: <Checkout />
    }
    return screens[activeScreen]
}

export default ScreenManager