import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react'
import { paymentStyles } from './PaymentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { handleCheckoutStep, handleToast, saveCustomerInfo } from '../../redux/actions';
import Dropdown from '../Dropdown/Dropdown';
import { dataPayMethod, dataTypeDocument, encryptData, getCardType, isValidCreditCardNumber, isValidForm, processSimulationCreditCardPayment, validateInputs, validateInputsCreditCard } from '../utils/utils';

const Payment = () => {
    const { cart, customerInfo, customerAddress } = useSelector((state: RootState) => state);

    const { totalizer } = cart;
    const [formData, setFormData] = useState<CustomerInfoState>({
        name: '',
        lastName: '',
        email: '',
        idNumber: '',
        idDocumentType: '',
        phone: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formCreditCard, setFormCreditCard] = useState<CreditCardInfoState>({
        cardholderName: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
    });

    const dispatch = useDispatch();
    const [payMethod, setPayMethod] = useState<string>()
    const [cardImage, setCardImage] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const isValidCustomerInfo = isValidForm(customerInfo)
    const isValidFormData = isValidForm(formData)
    const isValidFormCreditCard = isValidForm(formCreditCard)
    const isValidCustomerAddress = isValidForm(customerAddress)
    const handleChangeCustomer = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value
        });
        const newErrors = validateInputs({ ...formData, [field]: value });
        setErrors(newErrors);
    };

    const handleChangeCreditCard = (field: string, value: number | string) => {
        if (field === "cardNumber") {
            const typeCard = getCardType(value)
            if (typeCard !== "Invalid" && typeCard !== "Unknown") {
                const image = getCardType(value) === "VISA" ? "https://static-00.iconduck.com/assets.00/visa-icon-1024x666-f4uq3f07.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
                setCardImage(image)
            } else {
                setCardImage('')

            }
        }
        setFormCreditCard({
            ...formCreditCard,
            [field]: value
        });
        const newErrors = validateInputsCreditCard({ ...formData, [field]: value });
        setErrors(newErrors);
    }

    const handleSaveCustomerInfo = () => {
        const { name, lastName, email, idNumber, idDocumentType, phone } = formData;

        if (isValidFormData)
            dispatch(saveCustomerInfo({
                name: name,
                lastName: lastName,
                email: email,
                idNumber: idNumber,
                idDocumentType: idDocumentType,
                phone: phone
            }));
    }

    const handleSubmitPayment = async () => {
        setIsLoading(true)
        const { cardNumber } = formCreditCard;

        const isValidCreditCard = isValidCreditCardNumber(cardNumber)

        const encryptedPaymentData = encryptData(formCreditCard);

        if (payMethod === "Credit Card" && isValidFormCreditCard && isValidCreditCard && isValidCustomerInfo && isValidCustomerAddress) {
            try {
                const response = await processSimulationCreditCardPayment(encryptedPaymentData)
                dispatch(handleToast({
                    showToast: true,
                    message: response?.message,
                    type: "success"
                }))
                dispatch(handleCheckoutStep(1))
            } catch (error) {
                dispatch(handleToast({
                    showToast: true,
                    message: error?.message,
                    type: "error"
                }))
            }
        } else {
            if (isValidCustomerInfo && isValidCustomerAddress) {
                dispatch(handleToast({
                    showToast: true,
                    message: "Payment successfully",
                    type: "success"
                }))
                dispatch(handleCheckoutStep(1))
            } else {

            }

        }
        setIsLoading(false)
    }

    const validatePay = () => {
        if (payMethod === "Credit Card" && isValidFormCreditCard && isValidCustomerAddress && isValidCustomerInfo) {
            return true
        } else if (payMethod === "Cash on delivery" && isValidCustomerAddress && isValidCustomerInfo) {
            return true
        } else {
            return false
        }
    }

    const validatePayment = validatePay()

    useEffect(() => {
        if (customerInfo.email && !formData.email) {
            setFormData({
                ...formData,
                email: customerInfo.email
            });
        }
    }, [])

    return (
        <ScrollView
            contentContainerStyle={paymentStyles.container}
            style={{
                width: "100%"
            }}
        >
            <View style={{ ...paymentStyles.sectionContainer, height: "auto" }}>
                <Text style={paymentStyles.titleSection}>
                    Datos personales
                </Text>
                {
                    !isValidCustomerInfo ?
                        <>
                            <View style={paymentStyles.containerInputs}>
                                <Text style={paymentStyles.labelInput}>Name</Text>
                                <TextInput
                                    testID='input-name'
                                    style={paymentStyles.input}
                                    value={formData.name}
                                    onChangeText={(value) => handleChangeCustomer('name', value)}
                                />
                                {
                                    errors.name &&
                                    <Text
                                        style={{
                                            color: "red"
                                        }}
                                    >{errors.name}</Text>
                                }

                            </View>
                            <View style={paymentStyles.containerInputs}>
                                <Text style={paymentStyles.labelInput}>LastName</Text>
                                <TextInput
                                    style={paymentStyles.input}
                                    value={formData.lastName}
                                    onChangeText={(value) => handleChangeCustomer('lastName', value)}
                                    testID='input-lastName'
                                />
                                {
                                    errors.lastName &&
                                    <Text
                                        style={{
                                            color: "red"
                                        }}
                                    >{errors.lastName}</Text>
                                }
                            </View>
                            <View style={paymentStyles.containerInputs}>
                                <Text style={paymentStyles.labelInput}>Email</Text>
                                <TextInput
                                    testID='input-email'
                                    style={paymentStyles.input}
                                    value={formData.email || customerInfo.email}
                                    onChangeText={(value) => handleChangeCustomer('email', value)}
                                />
                                {
                                    errors.email &&
                                    <Text
                                        style={{
                                            color: "red"
                                        }}
                                    >{errors.email}</Text>
                                }
                            </View>
                            <View style={paymentStyles.containerInputs}>
                                <Text style={paymentStyles.labelInput}>ID Number</Text>
                                <TextInput
                                    style={paymentStyles.input}
                                    value={String(formData?.idNumber)}
                                    onChangeText={(value) => handleChangeCustomer('idNumber', value)}
                                    testID='input-idNumber'
                                />
                                {
                                    errors.idNumber &&
                                    <Text
                                        style={{
                                            color: "red"
                                        }}
                                    >{errors.idNumber}</Text>
                                }
                            </View>
                            <View style={paymentStyles.containerInputs}>
                                <Text style={paymentStyles.labelInput}>ID Document Type</Text>
                                <Dropdown style={paymentStyles} data={dataTypeDocument} onChange={(value: string) => handleChangeCustomer('idDocumentType', value)}
                                />
                                {
                                    errors.idDocumentType &&
                                    <Text
                                        style={{
                                            color: "red"
                                        }}
                                    >{errors.idDocumentType}</Text>
                                }
                            </View>
                            <View style={paymentStyles.containerInputs}>
                                <Text style={paymentStyles.labelInput}>Phone</Text>
                                <TextInput
                                    style={paymentStyles.input}
                                    value={String(formData.phone)}
                                    onChangeText={(value) => handleChangeCustomer('phone', value)}
                                    testID='input-phone'
                                />
                                {
                                    errors.phone &&
                                    <Text
                                        style={{
                                            color: "red"
                                        }}
                                    >{errors.phone}
                                    </Text>
                                }
                            </View>
                            <TouchableOpacity
                                testID="save-customer"
                                style={paymentStyles.buttonSave}
                                onPress={() => handleSaveCustomerInfo()}
                            >
                                <Text style={paymentStyles.textButtonSave}>Save and continue</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <Text>{customerInfo.name} {customerInfo.lastName}</Text>
                            <Text>{customerInfo.email}</Text>
                            <Text>{customerInfo.idDocumentType} {customerInfo.idNumber}</Text>
                            <Text>{customerInfo.phone}</Text>
                        </>

                }
            </View>
            <View style={{
                ...paymentStyles.sectionContainer,
                gap: 1,
                height: "auto"
            }}>
                <Text style={paymentStyles.titleSection}>
                    Dirección
                </Text>
                <Text style={paymentStyles.text}>{customerAddress.neighborhood}</Text>
                <Text style={paymentStyles.text}>{customerAddress.department} - {customerAddress.city}</Text>
                <Text style={paymentStyles.text}>{customerInfo.email}</Text>
                <View style={paymentStyles.containerTextNote}>
                    <Text style={paymentStyles.titleNote}>Nota:</Text>
                    <Text style={paymentStyles.text}>No se hacen entregas a corregimientos y/o veredas.</Text>
                </View>
            </View>
            <View style={{ ...paymentStyles.sectionContainer, height: "auto" }}>
                <Text style={paymentStyles.titleSection}>
                    Metodos de pago
                </Text>
                <Dropdown style={paymentStyles} data={dataPayMethod} onChange={setPayMethod} value={payMethod} testID="dropdown-pay-method" />
            </View>
            {
                payMethod === "Credit Card" &&
                <View style={{
                    ...paymentStyles.sectionContainer,
                    gap: 15,
                    height: "auto"
                }}>
                    <Text style={paymentStyles.titleSection}>
                        Tarjeta de Crédito
                    </Text>
                    <View style={paymentStyles.containerInputs}>
                        <Text style={paymentStyles.labelInput}>Cardholder Name</Text>
                        <TextInput
                            style={paymentStyles.input}
                            onChangeText={(value: string) => handleChangeCreditCard("cardholderName", value)}
                        />
                        {
                            errors.cardholderName &&
                            <Text
                                style={{
                                    color: "red"
                                }}
                            >{errors.cardholderName}</Text>
                        }
                    </View>
                    <View style={paymentStyles.containerInputs}>
                        <Text style={paymentStyles.labelInput}>Card Number</Text>
                        <View>
                            <TextInput
                                testID="input-cardNumber"
                                style={paymentStyles.input}
                                onChangeText={(value: string) => handleChangeCreditCard("cardNumber", value)}
                                value={formCreditCard?.cardNumber.toString()}
                                keyboardType="numeric"
                            />
                            {
                                formCreditCard.cardNumber &&
                                <Image source={{ uri: cardImage }} style={{
                                    width: 45,
                                    height: 25,
                                    position: "absolute",
                                    right: 5,
                                    top: 7
                                }}
                                />
                            }
                            {
                                errors.cardNumber &&
                                <Text
                                    style={{
                                        color: "red"
                                    }}
                                >{errors.cardNumber}</Text>
                            }
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <View style={{
                            width: "45%",
                            ...paymentStyles.containerInputs
                        }}>
                            <Text style={paymentStyles.labelInput}>Expiration</Text>
                            <TextInput style={paymentStyles.input}
                                placeholder='MM/YY'
                                placeholderTextColor={"#ccc"}
                                onChangeText={(value: string) => handleChangeCreditCard("expiration", value)}
                                value={formCreditCard.expiration}
                            />
                        </View>
                        <View style={{
                            width: "45%",
                            ...paymentStyles.containerInputs
                        }}>
                            <Text style={paymentStyles.labelInput}>CVV</Text>
                            <TextInput
                                style={paymentStyles.input}
                                onChangeText={(value: string) => handleChangeCreditCard("cvv", value)}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    {
                        (errors.expiration || errors.cvv) &&
                        <Text
                            style={{
                                color: "red"
                            }}
                        >{errors.expiration || errors.cvv}</Text>
                    }
                </View>
            }
            <View style={{
                ...paymentStyles.containerItemsPrices,
                marginTop: 20
            }}>
                <Text>SubTotal</Text>
                <Text>$ {totalizer}</Text>
            </View>
            <View style={paymentStyles.containerItemsPrices}>
                <Text>Shipping Fee</Text>
                <Text>Free</Text>
            </View>
            <View style={paymentStyles.containerItemsPrices}>
                <Text>GrandTotal</Text>
                <Text>$ {totalizer}</Text>
            </View>
            <View style={paymentStyles.separator} />
            <View style={paymentStyles.containerTotal}>
                <Text style={paymentStyles.textTotal}>$ {totalizer}</Text>
                <TouchableOpacity
                    style={{
                        ...paymentStyles.containerButtonPay,
                        backgroundColor: !validatePayment ? "#ccc" : "#015CA9"
                    }}
                    testID='button-pay'
                    onPress={() => handleSubmitPayment()}
                    disabled={isLoading || !validatePayment}
                >
                    {
                        isLoading ?
                            <ActivityIndicator color={"#fff"} size={25} />
                            :
                            <Text style={paymentStyles.textButtonPay}
                            >
                                Pay
                            </Text>
                    }
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default Payment