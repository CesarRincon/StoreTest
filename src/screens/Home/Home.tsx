import { ScrollView } from 'react-native'
import React from 'react'
import Banner from '../../components/Banner/Banner'
import Search from '../../components/Search/Search'
import ProductShowCase from '../../components/ProductShowCase/ProductShowCase';
import ShippingModal from '../../components/ShippingModal/ShippingModal';
import { useSelector } from 'react-redux';
import { homeStyles } from './HomeStyles';

const Home = () => {
    const { modalManager } = useSelector((state: RootState) => state);

    const { isActive } = modalManager;

    return (
        <ScrollView
            style={homeStyles.scrollView}
            contentInsetAdjustmentBehavior="automatic"
        >
            <Search />
            <Banner />
            <ProductShowCase title="Collection 1" collectionName="men's clothing" />
            <ProductShowCase title="Collection 2" collectionName="jewelery" />
            <ShippingModal showModal={isActive} />
        </ScrollView>
    )
}

export default Home