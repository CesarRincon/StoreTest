import { useDispatch } from 'react-redux';
import { setActiveScreen } from '../redux/actions';


const useLinkTo = () => {
    const dispatch = useDispatch();

    const linkTo = (term: string) => {
        dispatch(setActiveScreen(term));
    };

    return {
        linkTo
    }
}

export default useLinkTo