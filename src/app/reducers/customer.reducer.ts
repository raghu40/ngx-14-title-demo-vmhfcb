export class customer {
  id:number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  address: any;
}

export function customerReducer(state: customer[] = [], action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'ADD_CUSTOMER': {
      return [...state, action.payload];
    }
    case 'DELETE_CUSTOMER': {
      console.log(state);
      console.log(state.splice(action.payload, 1));
      return state.splice(0, 1);
    }
    case 'SELCTED_CUSTOMER': {
     
         return state.filter((data => data['id'] == action.payload));
    }

    default:
      return state;
  }
}
