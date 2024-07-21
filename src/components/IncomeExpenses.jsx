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
    <div className="inc-exp-container">
      <div>
        <h4 className="font-bold text-xs text-slate-400">Income</h4>
        <p className="money plus font-bold text-sm">${income}</p>
      </div>
      <div>
        <h4 className="font-bold text-xs text-slate-400">Expense</h4>
        <p className="money minus font-bold text-sm">${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
