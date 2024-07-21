import useGlobalState from "@/hooks/useGlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4 className="text-lg font-semibold text-slate-500">Your Balance</h4>
      <h1
        className={`text-3xl font-bold ${
          total < 0
            ? "text-red-500"
            : total > 0
            ? "text-green-500"
            : "text-slate-800"
        }`}
      >
        ${total}
      </h1>
    </div>
  );
}

export default Balance;
