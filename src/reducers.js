function reducers(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        slots: state.slots === '' ? 1 : state.slots + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        slots: state.slots === '' ? 1 : state.slots - 1,
      };
    case 'SET SLOTS': {
      return {
        ...state,
        slots: action.payload,
      };
    }
    case 'SET PLAN':
      return {
        ...state,
        plan: action.payload,
      };
    case 'SET PRICE':
      return {
        ...state,
        price: action.payload,
      };
    case 'SET PERIOD':
      return {
        ...state,
        period: action.payload,
      };
    case 'SET DISCOUNT': {
      return {
        ...state,
        discount: action.payload,
      };
    }
    default:
      return state;
  }
}
export default reducers;
