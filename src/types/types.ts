interface CartState {
    products: any[];
    totalizer: number
}

interface ScreenState {
    activeScreen: string;
}

interface CustomerInfoState {
    name: string;
    lastName: string;
    email: string;
    idNumber: number | string;
    idDocumentType: string;
    phone: number | string;
}

interface CreditCardInfoState {
    cardholderName: string;
    cardNumber: number | string,
    expiration: string,
    cvv: number | string,
}

interface ModalManagerState {
    isActive: boolean
}

interface CustomerAddress {
    department: string
    city: string,
    neighborhood: string
}

interface ToastManagerState {
    showToast: boolean
    message: string
    type: "success" | "error"
}

interface CheckoutManagerState {
    step: number
}

interface RootState {
    cart: CartState;
    activeScreen: string;
    customerInfo: CustomerInfoState;
    customerAddress: CustomerAddress;
    modalManager: ModalManagerState;
    toastManager: ToastManagerState;
    checkoutManager: CheckoutManagerState;
}

interface SelectedInputs {
    department: string;
    city: string;
}

type DataCountry = Record<string, Record<string, any>>;