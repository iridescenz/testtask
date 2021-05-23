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
    default:
      return state;
  }
}
 export default reducers