import React from 'react';
import { render } from '@testing-library/react-native';
import CartMode from '../components/ProductCard/Modes/CartMode/CartMode';

describe('CartMode', () => {
    const mockItem = {
        image: 'https://example.com/product-image.png',
        title: 'Test Product',
        price: 19.99,
    };

    it('should render the component with the correct structure', () => {
        const { getByTestId, getByText } = render(<CartMode item={mockItem} />);

        const cartModeContainer = getByTestId('cart-mode');
        expect(cartModeContainer).toBeTruthy();

        const productImage = getByTestId('cart-mode-image');
        expect(productImage).toBeTruthy();

        const productTitle = getByText('Test Product');
        expect(productTitle).toBeTruthy();

        const productPrice = getByText('$ 19.99');
        expect(productPrice).toBeTruthy();

        const quantitySelector = getByTestId('quantity-selector');
        expect(quantitySelector).toBeTruthy();
    });
});
