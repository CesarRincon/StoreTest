import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import useLinkTo from '../hooks/useLinkTo';
import Cart from '../screens/Cart/Cart';

const mockReducer = (state = { cart: { products: [] } }, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

const mockStore = createStore(mockReducer);

jest.mock('../hooks/useLinkTo', () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue({
        linkTo: jest.fn(),
    }),
}));

describe('Cart', () => {
    it('should render "Your cart is empty" when the cart is empty', () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <Cart />
            </Provider>
        );

        expect(getByText('Your cart is empty.')).toBeTruthy();
    });

    it('should show "Go to Home" button when cart is empty', () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <Cart />
            </Provider>
        );

        const button = getByText('Go to Home');
        expect(button).toBeTruthy();

        fireEvent.press(button);

        expect(useLinkTo().linkTo).toHaveBeenCalledWith('home');
    });

    it('should render Totalizer component when there are products', () => {
        const stateWithProducts = {
            cart: {
                products: [
                    { id: '1', name: 'Product 1' },
                    { id: '2', name: 'Product 2' },
                ],
            },
        };

        const mockStoreWithProducts = createStore(mockReducer, stateWithProducts);

        const { getByText } = render(
            <Provider store={mockStoreWithProducts}>
                <Cart />
            </Provider>
        );

        expect(getByText('Go to Pay')).toBeTruthy();
    });
});
