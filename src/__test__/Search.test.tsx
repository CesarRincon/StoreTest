import React from 'react';
import { render } from '@testing-library/react-native';
import Search from '../components/Search/Search';
describe('Search', () => {
    it('should render the Search text', () => {
        const { getByText } = render(<Search />);

        expect(getByText('Search')).toBeTruthy();
    });
});
