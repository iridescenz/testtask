function reducers (state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state, slots: state.slots + 1
      };
    case 'DECREMENT':
      return {
        ...state, slots: state.slots - 1
      };
    case 'SET SLOTS': {
      return {
        ...state, slots: action.payload,
      }
    }
    default:
      return state;
  }
}
 export default reducers