import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { getProductsByCollection } from '../../services/services';
import { productShowCaseStyles } from './ProductShowCaseStyles';

const ProductShowCase = (props: any) => {
    const { horizontal = true, title = "Collection 1", collectionName } = props;
    const flatListRef = useRef<FlatList>(null)
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const componentDidMount = async () => {
        setIsLoading(true)
        const products = await getProductsByCollection(collectionName)
        setData(products)
        setIsLoading(false)
    }

    useEffect(() => {
        componentDidMount()
    }, []);

    return (
        <View
            style={productShowCaseStyles.container}
        >
            {
                isLoading ?
                    <ActivityIndicator color={"#000"} size={40} />
                    :
                    <>
                        <View style={productShowCaseStyles.containerHeaderShowCase}>
                            <Text style={productShowCaseStyles.textTitle}>{title}</Text>
                            <Text style={productShowCaseStyles.textTitle}>Show More</Text>
                        </View>
                        <View style={productShowCaseStyles.containerFlatList}>
                        </View>
                        <FlatList
                            horizontal={horizontal}
                            ref={flatListRef}
                            data={data}
                            keyExtractor={(item, index) => `${item?.id} + ${index}`}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={10}
                            renderItem={(product) => <ProductCard product={product} mode="showCase" />}
                        />
                    </>
            }
        </View>
    )
}

export default ProductShowCase