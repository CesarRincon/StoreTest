import React, { useState, useEffect } from 'react';
import { Text, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { handleToast } from '../../redux/actions';
import { toastStyles } from './ToastStyles';

const Toast = () => {
    const { toastManager } = useSelector((state: RootState) => state);
    const [show, setShow] = useState(toastManager.showToast);
    const position = new Animated.Value(-100);
    const dispatch = useDispatch();

    useEffect(() => {
        if (toastManager.showToast) {
            setShow(true);

            Animated.timing(position, {
                toValue: 10,
                duration: 700,
                useNativeDriver: true,
            }).start();


            setTimeout(() => {
                Animated.timing(position, {
                    toValue: -100,
                    duration: 700,
                    useNativeDriver: true,
                }).start();

                setTimeout(() => {
                    setShow(false);
                    dispatch(
                        handleToast({
                            showToast: false,
                            message: '',
                            type: 'success',
                        })
                    );
                }, 700);
            }, 3000);
        }
    }, [position, toastManager.showToast]);

    if (!show) return null;

    return (
        <Animated.View
            style={[
                toastStyles.toastContainer,
                {
                    transform: [{ translateY: position }],
                    backgroundColor: toastManager?.type === "success" ? '#2DCA45' : 'red',
                },
            ]}
        >
            <Text style={toastStyles.toastText}>{toastManager.message}</Text>
        </Animated.View>
    );
};

export default Toast;
