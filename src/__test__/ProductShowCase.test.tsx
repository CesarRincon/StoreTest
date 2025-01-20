import { render } from '@testing-library/react-native';
import React from 'react';
import ProductShowCase from '../components/ProductShowCase/ProductShowCase';
import { getProductsByCollection } from '../services/services';

jest.mock('../services/services', () => ({
    getProductsByCollection: jest.fn(),
}));

describe('ProductShowCase Component', () => {
    it('should show ActivityIndicator when loading', () => {
        (getProductsByCollection as jest.Mock).mockResolvedValue([]);

        const { getByTestId } = render(<ProductShowCase collectionName="collection1" />);

        expect(getByTestId('activity-indicator')).toBeTruthy();
    });
});
