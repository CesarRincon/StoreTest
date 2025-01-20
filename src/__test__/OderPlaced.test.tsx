import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'

import { useDispatch } from 'react-redux'
import OrderPlaced from '../components/OrderPlaced/OrderPlaced'

jest.mock('../hooks/useLinkTo', () => ({
    __esModule: true,
    default: () => ({
        linkTo: jest.fn(),
    }),
}))

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}))

describe('OrderPlaced', () => {
    it('renders correctly and handles continue button press', async () => {

        const dispatchMock = jest.fn()
        useDispatch.mockReturnValue(dispatchMock)

        const { getByText, getByTestId } = render(<OrderPlaced />)

        await waitFor(() => expect(getByText('Your order number is')).toBeTruthy())

        expect(getByTestId('order-success-image')).toBeTruthy()
        expect(getByText('Successful!')).toBeTruthy()
        expect(getByText('Your order number is')).toBeTruthy()
        expect(getByText('You will receive the order confirmation email shortly')).toBeTruthy()
        expect(getByText('Thank you for shopping with us')).toBeTruthy()
        expect(getByText('Continue Shopping')).toBeTruthy()

        fireEvent.press(getByText('Continue Shopping'))

        await waitFor(() => {
            expect(dispatchMock).toHaveBeenCalledWith({ type: 'HANDLE_STEP_CHECKOUT', payload: 0 })
            expect(dispatchMock).toHaveBeenCalledWith({
                type: 'CLEAR_CART', payload: []
            })
        })
    })
})
