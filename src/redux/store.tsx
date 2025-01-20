import { createStore } from 'redux';
import rootReducer from './reducer'; // Asegúrate de que la ruta sea correcta

const store = createStore(rootReducer);

export default store;
