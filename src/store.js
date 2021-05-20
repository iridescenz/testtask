import { createStore } from 'redux'

const initialState = {count : 0}

function slots (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'SET SLOTS':
      return {
        count: state.count = this.target.value
      }
    default:
      return state;
  }
}
 
const store = createStore(slots);


export default store