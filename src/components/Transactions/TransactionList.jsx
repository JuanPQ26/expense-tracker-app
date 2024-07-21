import useGlobalState from "@/hooks/useGlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      {transactions.map((transaction) => (
        <div
          className="flex flex-col bg-slate-100 p-2 m-1 rounded"
          key={transaction.id}
        >
          <p className="font-semibold text-slate-600">
            {transaction.description}
          </p>
          <div className="text-lg font-bold">
            <span
              className={`${
                transaction.amount < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              ${transaction.amount.toFixed(2)}
            </span>
          </div>
          <button
            className="bg-slate-200 text-slate-800 font-bold p-2 rounded"
            onClick={() => deleteTransaction(transaction.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default TransactionList;
