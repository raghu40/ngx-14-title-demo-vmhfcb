export class customer {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  address: any;
}

export function customerReducer(state = [], action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'ADD_CUSTOMER': {
      return [...state, action.payload];
    }
    case 'UPDATE_CUSTOMER': {
      let selectedData = action.payload;
      return state.map((data) =>
        data['id'] == selectedData['id'] ? selectedData : data
      );
    }
    case 'DELETE_CUSTOMER': {
      let selectedData = action.payload;
      return state.filter((data) => data['id'] != selectedData['id']);
    }
    case 'SELCTED_CUSTOMER': {
      return state.filter((data) => data['id'] == action.payload);
    }

    default:
      return state;
  }
}
