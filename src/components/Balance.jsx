import useGlobalState from "@/hooks/useGlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const isNegative = total < 0;
  const isPositive = total > 0;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
        Your Balance
      </p>
      <p
        className={`text-[2rem] sm:text-[2.75rem] font-extrabold leading-none tracking-tight transition-colors ${
          isNegative
            ? "text-expense"
            : isPositive
              ? "text-income"
              : "text-slate-800"
        }`}
      >
        ${total}
      </p>
      <p className="text-xs text-slate-400 font-medium mt-2">
        {isNegative
          ? "You're in the red"
          : isPositive
            ? "You're on track"
            : "No transactions yet"}
      </p>
    </div>
  );
}

export default Balance;
