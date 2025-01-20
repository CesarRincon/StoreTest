import React from 'react';
import { render, act } from '@testing-library/react-native';
import SplashScreen from '../components/SplashScreen/SplashScreen';

jest.useFakeTimers();

test('renders SplashScreen correctly and triggers onFinish after 2 seconds', () => {
    const onFinishMock = jest.fn();
    const { getByText, getByTestId } = render(<SplashScreen onFinish={onFinishMock} />);

    expect(getByText('Bienvenido a Mi App')).toBeTruthy();
    expect(getByTestId('splash-logo')).toBeTruthy();

    act(() => {
        jest.advanceTimersByTime(2000);
    });

    expect(onFinishMock).toHaveBeenCalledTimes(1);
});
