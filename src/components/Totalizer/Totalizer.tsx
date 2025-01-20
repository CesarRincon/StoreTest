import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { useSelector } from 'react-redux';
import useLinkTo from '../../hooks/useLinkTo';
import { totalizerStyles } from './TotalizerStyles';


const Totalizer = () => {

    const { totalizer } = useSelector((state) => state?.cart);
    const { linkTo } = useLinkTo()

    return (
        <View style={totalizerStyles.container}>
            <Text
                style={totalizerStyles.textTotalizer}
                testID="totalizer-text"
            >
                $ {totalizer}
            </Text>
            <TouchableOpacity
                style={totalizerStyles.containerButton}
                onPress={() => linkTo("checkout")}
                testID="pay-button"
            >
                <Text style={totalizerStyles.textButton}>Go to Pay</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Totalizer