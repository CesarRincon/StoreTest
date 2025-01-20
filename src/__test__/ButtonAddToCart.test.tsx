import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { addProduct } from '../redux/actions';
import ButtonAddToCart from '../components/ButtonAddToCart/ButtonAddToCart';

const mockReducer = (state = { cart: { products: [] }, customerInfo: { email: '' } }, action: any) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: [...state.cart.products, action.payload],
                },
            };
        case 'HANDLE_MODAL':
            return {
                ...state,
                customerInfo: {
                    ...state.customerInfo,
                    email: action.payload ? 'test@example.com' : '',
                },
            };
        default:
            return state;
    }
};

const mockStore = createStore(mockReducer);

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

describe('ButtonAddToCart', () => {
    it('should dispatch modalAddress and email action when Add button is pressed', () => {
        const product = { id: '1', title: 'Product 1', image: '', price: 100, rating: { count: 5 } };

        const mockDispatch = jest.fn();
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

        const { getByText } = render(
            <Provider store={mockStore}>
                <ButtonAddToCart product={product} />
            </Provider>
        );

        fireEvent.press(getByText('Add'));

        expect(mockDispatch).toHaveBeenCalledWith(addProduct({
            payload: true,
            type: "HANDLE_MODAL"
        }));
    });
});
