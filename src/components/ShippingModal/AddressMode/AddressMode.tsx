import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Dropdown from '../../Dropdown/Dropdown';
import { useGetColombiaInfo } from '../../../hooks/useGetColombianInfo';
import { addressModeStyles } from './AddressModeStyles';
import { useDispatch } from 'react-redux';
import { handleModal, saveAddress } from '../../../redux/actions';
import { isValidForm } from '../../utils/utils';

const AddressMode = () => {
    const dispatch = useDispatch();
    const [formAddress, setFormAddress] = useState({
        department: '',
        city: '',
        neighborhood: ''
    });

    const { departments, cities } = useGetColombiaInfo({
        department: formAddress?.department
    })

    const [error, setError] = useState<boolean>(false)

    const isValidAddress = isValidForm(formAddress)

    const handleChangeFormAddress = (field: string, value: string) => {
        if (field === 'department') {
            setFormAddress({
                ...formAddress,
                [field]: value,
                city: ''
            });
        } else {
            setFormAddress({
                ...formAddress,
                [field]: value
            });
        }
        setError(false)
    };

    const handleSubmitAddress = () => {
        const { department, city, neighborhood } = formAddress;
        if (isValidAddress) {
            dispatch(saveAddress({ neighborhood, city, department }));
            dispatch(handleModal(false));
        } else {
            setError(true)
        }
    }

    return (
        <ScrollView contentContainerStyle={addressModeStyles.container}
            style={addressModeStyles.scrollView}
        >
            <Image source={{ uri: "https://img.icons8.com/ios/100/shopping-bag--v1.png" }} width={45} height={45} />
            <Text style={addressModeStyles.title}>Ahora, tu dirección de envío</Text>
            <Text
                style={addressModeStyles.description}
            >Usaremos tu dirección únicamente para asegurarnos de que tu pedido llegue a ti sin problemas.</Text>
            <View style={addressModeStyles.containerInput}>
                <Text style={addressModeStyles.labelInput}>Department</Text>
                <Dropdown
                    data={departments}
                    style={addressModeStyles}
                    onChange={(value: string) => handleChangeFormAddress("department", value)}
                    value={formAddress.department}
                />
            </View>
            <View style={addressModeStyles.containerDropdown}>
                <Text style={addressModeStyles.labelInput}>City</Text>
                <Dropdown
                    data={cities}
                    style={addressModeStyles}
                    onChange={(value: string) => handleChangeFormAddress("city", value)}
                    disabled={!formAddress.department}
                    value={formAddress.city}
                />
            </View>
            <View style={addressModeStyles.containerInput}>
                <Text style={addressModeStyles.labelInput}>Address</Text>
                <TextInput
                    style={addressModeStyles.input}
                    onChangeText={(value: string) => handleChangeFormAddress("neighborhood", value)}
                />
            </View>
            {
                error &&
                <Text
                    style={addressModeStyles.textError}
                >Please fill in all the fields.</Text>
            }
            <TouchableOpacity
                style={addressModeStyles.containerButton}
                onPress={() => handleSubmitAddress()}
            >
                <Text style={addressModeStyles.textButton}>Continue</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default AddressMode