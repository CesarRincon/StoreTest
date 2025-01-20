export const SET_ACTIVE_SCREEN = 'SET_ACTIVE_SCREEN';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_PRODUCT_COLLECTION = 'ADD_COLLECTION';
export const SET_CART_FROM_STORAGE = 'SET_CART_FROM_STORAGE';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SAVE_CUSTOMER_INFO = 'SAVE_CUSTOMER_INFO';
export const SET_CREDIT_CARD_INFO = 'SET_CREDIT_CARD_INFO';
export const SAVE_ADDRESS = 'SAVE_ADDRESS';
export const HANDLE_MODAL = 'HANDLE_MODAL';
export const HANDLE_TOAST = 'HANDLE_TOAST';
export const HANDLE_STEP_CHECKOUT = 'HANDLE_STEP_CHECKOUT';

export const addProduct = (product: any) => ({
    type: ADD_PRODUCT,
    payload: product,
});

export const setActiveScreen = (screenName: string) => ({
    type: SET_ACTIVE_SCREEN,
    payload: screenName,
});

export const updateQuantity = (productId: number, quantity: number) => ({
    type: UPDATE_QUANTITY,
    payload: { productId, quantity },
})

export const clearCart = () => ({
    type: CLEAR_CART,
    payload: []
})

export const removeProduct = (productId: number) => ({
    type: REMOVE_PRODUCT,
    payload: productId
})

export const saveCustomerInfo = (data: CustomerInfoState) => ({
    type: SAVE_CUSTOMER_INFO,
    payload: data
})

export const saveCreditCardInfo = (data: any) => ({
    type: SET_CREDIT_CARD_INFO,
    payload: data,
});
export const saveAddress = (data: CustomerAddress) => ({
    type: SAVE_ADDRESS,
    payload: data,
});
export const handleModal = (data: boolean) => ({
    type: HANDLE_MODAL,
    payload: data,
});
export const handleToast = (data: any) => ({
    type: HANDLE_TOAST,
    payload: data,
});
export const handleCheckoutStep = (step: number) => ({
    type: HANDLE_STEP_CHECKOUT,
    payload: step,
});