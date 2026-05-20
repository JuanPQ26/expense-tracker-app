import useGlobalState from "@/hooks/useGlobalState";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <p className="text-sm font-bold text-slate-500 mb-1">No transactions yet</p>
      <p className="text-xs text-slate-400 max-w-[200px]">
        Add your first transaction to start tracking your expenses
      </p>
    </div>
  );
}

function DeleteButton({ onClick }) {
  return (
    <button
      className="flex items-center justify-center w-8 h-8 rounded-lg text-slate-300 hover:text-expense hover:bg-expense/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-expense/20"
      onClick={onClick}
      aria-label="Delete transaction"
      title="Delete"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    </button>
  );
}

function TransactionItem({ transaction, onDelete }) {
  const isExpense = transaction.amount < 0;

  return (
    <li
      className={`group flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
        isExpense
          ? "border-l-4 border-l-expense border-slate-100"
          : "border-l-4 border-l-income border-slate-100"
      }`}
    >
      <div
        className={`shrink-0 w-2 h-2 rounded-full ${
          isExpense ? "bg-expense" : "bg-income"
        }`}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-700 truncate">
          {transaction.description}
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span
          className={`text-sm sm:text-base font-bold tabular-nums ${
            isExpense ? "text-expense" : "text-income"
          }`}
        >
          {isExpense ? "-" : "+"}$
          {Math.abs(transaction.amount).toFixed(2)}
        </span>
        <DeleteButton onClick={() => onDelete(transaction.id)} />
      </div>
    </li>
  );
}

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  if (transactions.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="flex flex-col gap-2">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onDelete={deleteTransaction}
        />
      ))}
    </ul>
  );
}

export default TransactionList;
