import { View, Image } from 'react-native'
import React from 'react'
import { bannerStyles } from './BannerStyles'

const Banner = () => {
    return (
        <View style={bannerStyles.container}>
            <Image
                source={{ uri: "https://img.freepik.com/vector-gratis/plantilla-banner-horizontal-ventas-dia-compras-12-12_23-2149851470.jpg?t=st=1736970568~exp=1736974168~hmac=951a099a288bf6a67167e8b3d4c1c5b21296161e808780936bc869b49a19306f&w=2000" }}
                width={500}
                height={120}
                resizeMode="cover"
            />
        </View>
    )
}

export default Banner