import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducer';
import Payment from '../components/Payment/Payment';

const store = createStore(rootReducer, {
    cart: { totalizer: 100 },
    customerInfo: {},
    customerAddress: { neighborhood: '', department: '', city: '' },
});

describe('Payment', () => {
    it('should render the form if customerInfo is empty', async () => {
        render(
            <Provider store={store}>
                <Payment />
            </Provider>
        );

        expect(screen.getByTestId('input-name')).toBeTruthy();
        expect(screen.getByTestId('input-lastName')).toBeTruthy();
        expect(screen.getByTestId('input-email')).toBeTruthy();
        expect(screen.getByTestId('input-idNumber')).toBeTruthy();
        expect(screen.getByTestId('input-phone')).toBeTruthy();
    });
});
