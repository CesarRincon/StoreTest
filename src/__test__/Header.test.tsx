import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from '../components/Header/Header';

const mockInitialState = {
    cart: { products: [{ id: 1 }, { id: 2 }] },
    activeScreen: 'home',
    checkoutManager: { step: 1 }
};

const mockReducer = (state = mockInitialState) => state;

const mockStore = createStore(mockReducer);

describe('Header', () => {

    it('should render the cart icon on the home screen', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Header />
            </Provider>
        );

        mockStore.dispatch({
            type: 'SET_ACTIVE_SCREEN',
            payload: { activeScreen: 'home' }
        });

        const cartIcon = getByTestId('cart-icon');
        expect(cartIcon).toBeTruthy();
    });

    it('should display the correct number of items in the cart', () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <Header />
            </Provider>
        );

        const cartBadge = getByText('2');
        expect(cartBadge).toBeTruthy();
    });
});
