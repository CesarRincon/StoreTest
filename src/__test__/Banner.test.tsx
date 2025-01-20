import React from 'react';
import { render } from '@testing-library/react-native';
import Banner from '../components/Banner/Banner';

describe('Banner Component', () => {
    it('should render the banner image correctly', () => {
        const { getByTestId } = render(<Banner />);

        const bannerImage = getByTestId('banner-image');

        expect(bannerImage.props.source.uri).toBe(
            "https://img.freepik.com/vector-gratis/plantilla-banner-horizontal-ventas-dia-compras-12-12_23-2149851470.jpg?t=st=1736970568~exp=1736974168~hmac=951a099a288bf6a67167e8b3d4c1c5b21296161e808780936bc869b49a19306f&w=2000"
        );
    });

    it('should render the container with correct styles', () => {
        const { getByTestId } = render(<Banner />);

        const container = getByTestId('banner-container');
        expect(container).toHaveStyle({
            height: 120,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
        });
    });
});
