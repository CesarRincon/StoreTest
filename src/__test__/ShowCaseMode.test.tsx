import React from 'react';
import { render } from '@testing-library/react-native';
import ShowCaseMode from '../components/ProductCard/Modes/ShowCaseMode/ShowCaseMode';

describe('ShowCaseMode', () => {
    const mockItem = {
        image: 'https://via.placeholder.com/150',
        title: 'Test Product',
        price: 100,
    };

    it('should render the component with the correct item data', () => {
        const { getByTestId, getByText } = render(<ShowCaseMode item={mockItem} />);

        const container = getByTestId('showcase-mode');
        expect(container).toBeTruthy();

        const title = getByText('Test Product');
        expect(title).toBeTruthy();

        const price = getByText('$ 100');
        expect(price).toBeTruthy();
    });

    it('should render the image with the correct URI', () => {
        const { getByTestId } = render(<ShowCaseMode item={mockItem} />);

        const image = getByTestId('showcase-mode').findByType('Image');
        expect(image.props.source.uri).toBe(mockItem.image);
    });
});
