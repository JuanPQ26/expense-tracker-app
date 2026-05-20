import useGlobalState from "@/hooks/useGlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 border-l-4 border-l-income">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Income
        </p>
        <p className="text-lg sm:text-xl font-bold text-income">
          +${income}
        </p>
      </div>
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 border-l-4 border-l-expense">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          Expense
        </p>
        <p className="text-lg sm:text-xl font-bold text-expense">
          -${Math.abs(expense).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
