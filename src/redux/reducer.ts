import { Alert } from 'react-native';
import { ADD_PRODUCT, CLEAR_CART, SET_ACTIVE_SCREEN, UPDATE_QUANTITY, REMOVE_PRODUCT, SAVE_CUSTOMER_INFO, SAVE_ADDRESS, HANDLE_MODAL, HANDLE_TOAST, HANDLE_STEP_CHECKOUT } from './actions';

const initialState = {
    customerInfo: {
        name: '',
        lastName: '',
        email: '',
        idNumber: '',
        idDocumentType: '',
        phone: ''
    },
    creditCardInfo: {
        cardholderName: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
    },
    cart: {
        products: [],
        totalizer: 0
    },
    customerAddress: {
        department: '',
        city: '',
        neighborhood: ''
    },
    activeScreen: 'home',
    modalManager: {
        isActive: false
    },
    toastManager: {
        showToast: false,
        message: "",
        type: "success"
    },
    checkoutManager: {
        step: 0
    }
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const productToAdd = action.payload;
            let products;

            const existingProductIndex = state.cart.products.findIndex(
                (item) => item?.id === productToAdd?.id
            );

            if (existingProductIndex >= 0) {
                Alert.alert("El producto ya esta en el carrito")
            } else {
                products = [...state.cart.products, action.payload];
            }

            const newTotalizer = products?.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: products,
                    totalizer: newTotalizer,
                },
            };

        case SET_ACTIVE_SCREEN:
            return {
                ...state,
                activeScreen: action.payload,
            };

        case UPDATE_QUANTITY:

            let updateTotalizer
            const copyProducts = [...state.cart.products];

            const toIndex = copyProducts.findIndex((prod: any) => {
                return prod.id === action.payload.productId
            })

            if (toIndex != -1) {
                state.cart.products[toIndex].quantity = action.payload.quantity
            }
            updateTotalizer = copyProducts?.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );

            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: copyProducts,
                    totalizer: updateTotalizer
                }
            };

        case CLEAR_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: [],
                    totalizer: 0
                },
            };

        case REMOVE_PRODUCT:

            const newProducts = state.cart.products.filter((product) => action.payload !== product?.id)

            const newTotal = newProducts?.reduce(
                (total, item) => total + item?.price * item?.quantity,
                0
            )
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: newProducts,
                    totalizer: newTotal
                },
            }
        case SAVE_CUSTOMER_INFO:
            return {
                ...state,
                customerInfo: {
                    ...state.customerInfo,
                    ...action.payload
                }
            }
        case SAVE_ADDRESS:
            return {
                ...state,
                customerAddress: {
                    ...state.customerAddress,
                    ...action.payload
                }
            };
        case HANDLE_MODAL:
            return {
                ...state,
                modalManager: {
                    ...state.modalManager,
                    isActive: action.payload
                }
            };
        case HANDLE_TOAST:
            return {
                ...state,
                toastManager: {
                    ...state.toastManager,
                    ...action.payload
                }
            };
        case HANDLE_STEP_CHECKOUT:
            return {
                ...state,
                checkoutManager: {
                    step: action.payload
                },
            };
        default:
            return state;
    }
};

export default rootReducer;