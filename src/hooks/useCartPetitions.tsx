import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearCart, removeProduct, updateQuantity } from '../redux/actions'

const useCartPetitions = (item?: any) => {
    const [quantity, setQuantity] = useState(item?.quantity)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(undefined)
    const dispatch = useDispatch();

    const increment = () => {
        setQuantity(quantity + 1)

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        const newTimeoutId = setTimeout(async () => {
            dispatch(updateQuantity(item.id, quantity + 1));
        }, 1500)

        setTimeoutId(newTimeoutId)
    }

    const decrement = () => {
        setQuantity(quantity - 1)

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        const newTimeoutId = setTimeout(async () => {
            if (quantity <= 1) {
                dispatch(updateQuantity(item.id, 1))
            } else {
                dispatch(updateQuantity(item.id, quantity - 1));
            }
        }, 1500)

        setTimeoutId(newTimeoutId)
    }

    const removeProductHandler = () => {
        dispatch(removeProduct(item?.id));
    }

    const clearCartHandler = () => {
        dispatch(clearCart());
    }
    return {
        increment,
        decrement,
        removeProductHandler,
        clearCartHandler,
        quantity
    }

}

export default useCartPetitions