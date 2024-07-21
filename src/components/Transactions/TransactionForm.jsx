import useGlobalState from "@/hooks/useGlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();

  const handleSubmitTransaction = (e) => {
    e.preventDefault();

    const { amount, description } = e.target;

    if (!amount.value || !description.value) return;

    const id = crypto.randomUUID();

    addTransaction({
      id,
      description: description.value,
      amount: +amount.value,
    });

    amount.value = "";
    description.value = "";
  };

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmitTransaction}>
        <input
          className="p-2 border border-slate-300 rounded"
          aria-label="description"
          type="text"
          id="description"
          name="description"
          placeholder="Enter a Description"
        />

        <input
          className="p-2 border border-slate-300 rounded"
          aria-label="amount"
          type="number"
          name="amount"
          id="amount"
          placeholder="0.00"
          step="0.01"
        />

        <button
          className="bg-slate-900 text-white font-medium  p-2 rounded"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
}

export default TransactionForm;
