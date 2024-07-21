import { ADD_TRANSACTION, DELETE_TRANSACTION } from "@/actions/actionTypes";

const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
