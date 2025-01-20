import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Totalizer from '../components/Totalizer/Totalizer';
import useLinkTo from '../hooks/useLinkTo';

const mockReducer = (state = { cart: { totalizer: 100 } }, action: any) => {
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

describe('Totalizer', () => {
    it('should render the totalizer value correctly', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Totalizer />
            </Provider>
        );

        const totalizerText = getByTestId('totalizer-text');
        const receivedPrice = totalizerText.props.children.join('');

        expect(receivedPrice).toBe('$ 100');
    });

    it('should call linkTo function with "checkout" when button is pressed', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <Totalizer />
            </Provider>
        );

        fireEvent.press(getByTestId('pay-button'));


        expect(useLinkTo().linkTo).toHaveBeenCalledWith('checkout');
    });
});
