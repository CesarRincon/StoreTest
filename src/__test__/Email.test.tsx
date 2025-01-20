import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import EmailMode from '../components/ShippingModal/EmailMode/EmailMode';

const mockReducer = (state = { customerInfo: {} }, action: any) => {
    switch (action.type) {
        case 'SAVE_CUSTOMER_INFO':
            return { ...state, customerInfo: action.payload };
        default:
            return state;
    }
};

const mockStore = createStore(mockReducer);

describe('EmailMode', () => {
    it('should update email and dispatch saveCustomerInfo action when continue button is pressed', () => {
        const { getByTestId } = render(
            <Provider store={mockStore}>
                <EmailMode />
            </Provider>
        );

        const input = getByTestId('email-input');
        fireEvent.changeText(input, 'test@example.com');

        const button = getByTestId('submit-button');
        fireEvent.press(button);

        const state = mockStore.getState();
        expect(state.customerInfo.email).toBe('test@example.com');
    });
});
