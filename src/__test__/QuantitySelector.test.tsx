import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QuantitySelector from '../components/QuantitySelector/QuantitySelector';
import useCartPetitions from '../hooks/useCartPetitions';

jest.mock('../hooks/useCartPetitions', () => jest.fn());

const mockItem = {
    id: '1',
    title: 'Product 1',
    price: 10,
    image: 'https://example.com/product1.jpg',
};

const mockInitialState = {
    cart: { products: [{ id: '1', quantity: 1 }] },
};

const mockReducer = (state = mockInitialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, cart: { ...state.cart, quantity: state.cart.quantity + 1 } };
        case 'DECREMENT':
            return { ...state, cart: { ...state.cart, quantity: state.cart.quantity - 1 } };
        default:
            return state;
    }
};

const mockStore = createStore(mockReducer);

describe('QuantitySelector', () => {
    it('should render with the correct initial quantity', () => {
        useCartPetitions.mockReturnValue({
            increment: jest.fn(),
            decrement: jest.fn(),
            removeProductHandler: jest.fn(),
            quantity: 1,
        });

        const { getByTestId } = render(
            <Provider store={mockStore}>
                <QuantitySelector item={mockItem} />
            </Provider>
        );
        expect(getByTestId('quantity-text')).toBeTruthy();
    });

    it('should call increment when the "+" button is pressed', () => {
        const incrementMock = jest.fn();
        useCartPetitions.mockReturnValue({
            increment: incrementMock,
            decrement: jest.fn(),
            removeProductHandler: jest.fn(),
            quantity: 1,
        });

        const { getByTestId } = render(
            <Provider store={mockStore}>
                <QuantitySelector item={mockItem} />
            </Provider>
        );

        fireEvent.press(getByTestId('increment'));
        expect(incrementMock).toHaveBeenCalledTimes(1);
    });

    it('should call decrement when the "-" button is pressed', () => {
        const decrementMock = jest.fn();
        useCartPetitions.mockReturnValue({
            increment: jest.fn(),
            decrement: decrementMock,
            removeProductHandler: jest.fn(),
            quantity: 2,
        });

        const { getByTestId } = render(
            <Provider store={mockStore}>
                <QuantitySelector item={mockItem} />
            </Provider>
        );

        fireEvent.press(getByTestId('decrement'));
        expect(decrementMock).toHaveBeenCalledTimes(1);
    });

});
