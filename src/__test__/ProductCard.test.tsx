import React from 'react';
import { render } from '@testing-library/react-native';
import ProductCard from '../components/ProductCard/ProductCard';

jest.mock('../components/ProductCard/Modes/ShowCaseMode/ShowCaseMode', () => {
    return jest.fn(() => "ShowCase Mode");
});

jest.mock('../components/ProductCard/Modes/CartMode/CartMode', () => {
    return jest.fn(() => 'Cart Mode');
});

describe('ProductCard', () => {
    const mockProduct = {
        item: {
            id: 1,
            name: 'Test Product',
            price: 100,
        },
    };

    it('should not render anything if mode is invalid', () => {
        const { queryByTestId } = render(
            <ProductCard product={mockProduct} mode="invalidMode" />
        );

        expect(queryByTestId('showcase-mode')).toBeNull();
        expect(queryByTestId('cart-mode')).toBeNull();
    });
});
