import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Dropdown from '../components/Dropdown/Dropdown';


describe('Dropdown', () => {
    const mockOnChange = jest.fn();

    const defaultProps = {
        style: {
            dropDownPaymentMethod: { borderWidth: 1, padding: 10 },
            text: { fontSize: 16 },
            containerDropdownItems: { maxHeight: 200 },
            contentContainerDropdownItems: { padding: 10 },
            item: { padding: 10 },
            textOption: { fontSize: 14 },
        },
        data: ['Opción 1', 'Opción 2', 'Opción 3'],
        onChange: mockOnChange,
        disabled: false,
        value: '',
    };

    it('should render without crashing', () => {
        const { getByText } = render(<Dropdown {...defaultProps} />);
        expect(getByText('Selecciona una opción')).toBeTruthy();
    });

    it('should show options when dropdown is clicked', async () => {
        const { getByText, getByTestId } = render(<Dropdown {...defaultProps} />);

        fireEvent.press(getByText('Selecciona una opción')); 

        await waitFor(() => {
            expect(getByText('Opción 1')).toBeTruthy();
            expect(getByText('Opción 2')).toBeTruthy();
            expect(getByText('Opción 3')).toBeTruthy();
        });
    });

    it('should select an option and call onChange', async () => {
        const { getByText } = render(<Dropdown {...defaultProps} />);

        fireEvent.press(getByText('Selecciona una opción')); 
        fireEvent.press(getByText('Opción 2')); 

        await waitFor(() => {
            expect(getByText('Opción 2')).toBeTruthy();
            expect(mockOnChange).toHaveBeenCalledWith('Opción 2');
        });
    });

    it('should not show options when disabled', async () => {
        const { getByText, queryByText } = render(<Dropdown {...defaultProps} disabled={true} />);

        fireEvent.press(getByText('Selecciona una opción')); 
        expect(queryByText('Opción 1')).toBeNull();
    });

    it('should reset value when `value` prop changes', async () => {
        const { getByText, rerender } = render(<Dropdown {...defaultProps} />);

        fireEvent.press(getByText('Selecciona una opción'));
        fireEvent.press(getByText('Opción 3'));

 
        rerender(<Dropdown {...defaultProps} value="Opción 3" />);

        expect(getByText('Opción 3')).toBeTruthy();
    });
});
