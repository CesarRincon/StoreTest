import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Dropdown = ({ style, data, onChange, disabled = false, value }: any) => {
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const [valueDropdown, setValueDropdown] = useState<string>("")

    const toggle = () => {
        setShowOptions(!showOptions)
    }

    useEffect(() => {
        if (!value) {
            setShowOptions(false)
            setValueDropdown('')
        }
    }, [value])

    return (
        <View>
            <TouchableOpacity
                style={{
                    ...style.dropDownPaymentMethod,
                    borderColor: showOptions ? "#015CA9" : "#ccc"
                }}
                onPress={() => !disabled && toggle()}
            >
                <Text style={style.text}>{valueDropdown ? valueDropdown : "Selecciona una opción"}</Text>
                <Image source={{ uri: "https://img.icons8.com/ios-filled/50/expand-arrow--v1.png" }} width={15} height={15} />
            </TouchableOpacity>
            {
                showOptions &&
                <ScrollView
                    style={style.containerDropdownItems}
                    contentContainerStyle={style.contentContainerDropdownItems}
                >
                    {
                        data?.length > 0 &&
                        data?.map((item: string, index: number) => {
                            return <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    onChange(item)
                                    setValueDropdown(item)
                                    setShowOptions(false)
                                }}
                                style={style.item}
                            >
                                <Text style={style?.textOption}>{item}</Text>
                            </TouchableOpacity>
                        })
                    }
                </ScrollView>
            }
        </View>
    )
}

export default Dropdown