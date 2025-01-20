import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Toast from '../components/Toast/Toast';

const toastReducer = (state = { toastManager: { showToast: false, message: '', type: 'success' } }, action) => {
    if (action.type === 'HANDLE_TOAST') {
        return { toastManager: action.payload };
    }
    return state;
};

const renderWithRedux = (initialState) => {
    const store = createStore(toastReducer, initialState);
    return {
        ...render(
            <Provider store={store}>
                <Toast />
            </Provider>
        ),
        store,
    };
};

describe('Toast', () => {
    it('Show toast', async () => {
        renderWithRedux({
            toastManager: { showToast: true, message: 'Success', type: 'success' },
        });

        expect(await screen.findByText('Success')).toBeTruthy();
    });

    it('he toast should appear for a few seconds.', async () => {
        renderWithRedux({
            toastManager: { showToast: true, message: 'Temporary message', type: 'success' },
        });

        await waitFor(() => {
            expect(screen.queryByText('Temporary message')).toBeNull();
        }, { timeout: 5000 });
    });

    it('Close modal', async () => {
        const { store } = renderWithRedux({
            toastManager: { showToast: true, message: 'Test message', type: 'success' },
        });

        await waitFor(() => {
            const actions = store.getState();
            expect(actions.toastManager.showToast).toBe(false);
        }, { timeout: 5000 });
    });

});
