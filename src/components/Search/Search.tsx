import { View, Text, Modal, Image } from 'react-native'
import React from 'react'
import { searchStyles } from './SearchStyles'

const Search = () => {
    return (
        <View style={searchStyles.container}>
            <View style={searchStyles.input}>
                <Text>Search</Text>
            </View>
            <View style={searchStyles.containerIconSearch}>
                <Image source={{ uri: "https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png" }} width={20} height={20} />
            </View>
        </View>
    )
}

export default Search