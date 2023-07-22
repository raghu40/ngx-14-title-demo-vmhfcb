export function ContactReducer(state = [], action) {
  switch(action.type) {
      case 'ADD_RECORD':
          return [...state, action.payload];
      case 'REMOVE_RECORD':
          state.splice(action.payload, 1);
          return state;
      default:
          return state;
  }
}