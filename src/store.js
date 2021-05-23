import { createStore } from 'redux'
import reducers from './reducers'

const initialState = {slots: '', total : null, discount: 0, period: null, plan: null, price: null}

const store = createStore(reducers, initialState);


export default store