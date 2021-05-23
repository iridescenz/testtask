import { createStore } from 'redux'
import reducers from './reducers'

const initialState = {slots : 0, total : 0, discount: 0, period: null, plan: ''}

const store = createStore(reducers, initialState);


export default store