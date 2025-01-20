import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ShippingModal from '../components/ShippingModal/ShippingModal';

const mockInitialState = {
    customerInfo: { email: 'test@example.com' },
};

const mockReducer = (state = mockInitialState, action: any) => {
    switch (action.type) {
        case 'HANDLE_MODAL':
            return {
                ...state,
                modalVisible: action.payload,
            };
        default:
            return state;
    }
};

const mockStore = createStore(mockReducer);

describe('ShippingModal', () => {
    it('should render the AddressMode if email is present', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <ShippingModal showModal={true} />
            </Provider>
        );

        const addressMode = getByTestId('address-mode');
        expect(addressMode).toBeTruthy();
    });

    it('should render the EmailMode if email is not present', () => {
        const newState = {
            customerInfo: { email: '' },
        };
        const newMockStore = createStore(mockReducer, newState);

        const { getByTestId } = render(
            <Provider store={newMockStore}>
                <ShippingModal showModal={true} />
            </Provider>
        );

        const emailMode = getByTestId('email-mode');
        expect(emailMode).toBeTruthy();
    });

    it('should close the modal when the close button is pressed', () => {
        const { getByRole } = render(
            <Provider store={mockStore}>
                <ShippingModal showModal={true} />
            </Provider>
        );

        fireEvent.press(getByRole('button'));
        
        expect(mockStore.getState().modalVisible).toBe(false);
    });
});
