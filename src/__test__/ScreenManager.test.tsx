import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ScreenManager from '../components/ScreenManager/ScreenManager';

const mockInitialState = {
    activeScreen: 'home'
};

const mockReducer = (state = mockInitialState, action: any) => {
    switch (action.type) {
        case 'SET_ACTIVE_SCREEN':
            return { ...state, activeScreen: action.payload };
        default:
            return state;
    }
};

const mockStore = createStore(mockReducer);

describe('ScreenManager', () => {
    it('should render the Home screen when activeScreen is "home"', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <ScreenManager />
            </Provider>
        );

        expect(getByTestId('home-screen')).toBeTruthy();
    });

    it('should render the Cart screen when activeScreen is "cart"', () => {
       
        mockStore.dispatch({
            type: 'SET_ACTIVE_SCREEN',
            payload: 'cart',
        });

        const { getByTestId } = render(
            <Provider store={mockStore}>
                <ScreenManager />
            </Provider>
        );

        expect(getByTestId('cart-screen')).toBeTruthy();
    });

    it('should render the Checkout screen when activeScreen is "checkout"', () => {
        mockStore.dispatch({
            type: 'SET_ACTIVE_SCREEN',
            payload: 'checkout',
        });

        const { getByTestId } = render(
            <Provider store={mockStore}>
                <ScreenManager />
            </Provider>
        );

        expect(getByTestId('checkout-screen')).toBeTruthy();
    });
});
