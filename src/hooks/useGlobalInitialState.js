import { useMemo } from "react";
import transactionServices from "@/services/transaction";

const initialState = {
  transactions: [],
};

const useGlobalInitialState = () =>
  useMemo(() => {
    const transactions = transactionServices.getTransactions();
    return transactions.length ? { transactions } : initialState;
  }, []);
export default useGlobalInitialState;
