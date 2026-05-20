import { useState } from "react";
import useGlobalState from "@/hooks/useGlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [errors, setErrors] = useState({});

  const handleSubmitTransaction = (e) => {
    e.preventDefault();

    const { amount, description } = e.target;
    const newErrors = {};

    if (!description.value.trim()) {
      newErrors.description = "Please enter a description";
    }

    if (!amount.value) {
      newErrors.amount = "Please enter an amount";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const id = crypto.randomUUID();

    addTransaction({
      id,
      description: description.value.trim(),
      amount: +amount.value,
    });

    amount.value = "";
    description.value = "";
    setErrors({});
  };

  const handleInput = (e) => {
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-white text-sm font-medium placeholder:text-slate-300 transition-all duration-200 outline-none focus:ring-2";

  const validInput = `${inputBase} border-slate-200 focus:border-primary focus:ring-primary/20`;
  const errorInput = `${inputBase} border-expense/40 focus:border-expense focus:ring-expense/20`;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100">
      <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
        Add Transaction
      </h2>
      <form
        className="flex flex-col gap-3 sm:gap-4"
        onSubmit={handleSubmitTransaction}
        noValidate
      >
        <div>
          <label
            htmlFor="description"
            className="block text-xs font-semibold text-slate-500 mb-1.5"
          >
            Description
          </label>
          <input
            className={errors.description ? errorInput : validInput}
            type="text"
            id="description"
            name="description"
            placeholder="e.g. Grocery shopping"
            onInput={handleInput}
            autoComplete="off"
          />
          {errors.description && (
            <p className="text-xs text-expense font-medium mt-1.5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.description}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-xs font-semibold text-slate-500 mb-1.5"
          >
            Amount
          </label>
          <input
            className={errors.amount ? errorInput : validInput}
            type="number"
            name="amount"
            id="amount"
            placeholder="0.00"
            step="0.01"
            onInput={handleInput}
          />
          {errors.amount && (
            <p className="text-xs text-expense font-medium mt-1.5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.amount}
            </p>
          )}
          <p className="text-xs text-slate-400 font-medium mt-1.5">
            Use <code className="text-primary bg-primary-50 px-1 rounded text-[0.7rem] font-semibold">-</code> for expenses, plain number for income
          </p>
        </div>

        <button
          className="w-full bg-primary hover:bg-primary-600 text-white font-bold text-sm py-3.5 px-4 rounded-xl transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/40"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
