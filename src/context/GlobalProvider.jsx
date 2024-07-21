import { useReducer, useEffect } from "react";
import useGlobalInitialState from "@/hooks/useGlobalInitialState";
import GlobalContext from "@/context/GlobalContext";
import AppReducer from "@/reducers/AppReducer";
import transactionServices from "@/services/transaction";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "@/actions/actionTypes";

const GlobalProvider = ({ children }) => {
  const initialState = useGlobalInitialState();

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    console.log("Saving transactions to local storage ...");
    transactionServices.saveTransactions(state);
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: { id },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
