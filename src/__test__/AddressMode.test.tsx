import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AddressMode from '../components/ShippingModal/AddressMode/AddressMode';
import { handleModal, saveAddress } from '../redux/actions';

const mockInitialState = {
    customerInfo: { email: 'test@example.com' },
    departments: ['Antioquia', 'Bogotá'],
    cities: ['Bogotá', 'Medellín'],
};

const mockReducer = (state = mockInitialState, action: any) => {
    switch (action.type) {
        case 'SAVE_ADDRESS':
            return { ...state, address: action.payload };
        case 'HANDLE_MODAL':
            return { ...state, modalVisible: action.payload };
        default:
            return state;
    }
};

const mockStore = createStore(mockReducer);

describe('AddressMode', () => {
    it('should render correctly', () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <AddressMode />
            </Provider>
        );

        expect(getByText('Now, your shipping address.')).toBeTruthy();
        expect(getByText('Department')).toBeTruthy();
        expect(getByText('City')).toBeTruthy();
        expect(getByText('Address')).toBeTruthy();
    });

    it('should show error when form is invalid and continue is pressed', async () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <AddressMode />
            </Provider>
        );

        fireEvent.press(getByText('Continue'));

        await waitFor(() => {
            expect(getByText('Please fill in all the fields.')).toBeTruthy();
        });
    });
});
