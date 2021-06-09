import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  slots: '',
  discount: 0,
  period: null,
  plan: null,
  price: null,
  total : null
};

const store = createStore(reducers, initialState);

export default store;
