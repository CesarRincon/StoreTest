import { View, Modal, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import EmailMode from './EmailMode/EmailMode';
import AddressMode from './AddressMode/AddressMode';
import { useDispatch, useSelector } from 'react-redux';
import { shippingModalStyles } from './ShippingModalStyles';
import { handleModal } from '../../redux/actions';

const ShippingModal = (props: any) => {
    const { showModal } = props;
    const { customerInfo } = useSelector((state: RootState) => state);

    const dispatch = useDispatch();
    return (
        <Modal visible={showModal} transparent>
            <View style={shippingModalStyles.overlay}>
                <View style={shippingModalStyles.containerModal}>
                    {
                        customerInfo.email ?
                            <AddressMode /> :
                            <EmailMode />
                    }
                    {
                        !customerInfo.email &&
                        <TouchableOpacity
                            style={shippingModalStyles.containerButtonClose}
                            onPress={() => dispatch(handleModal(false))}
                        >
                            <Image source={{ uri: "https://img.icons8.com/ios/100/FFFFFF/delete-sign--v1.png" }} width={20} height={20} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </Modal >
    )
}

export default ShippingModal