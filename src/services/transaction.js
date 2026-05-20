const saveTransactions = (state) => {
  localStorage.setItem("transactions", JSON.stringify(state.transactions));
};

export const getTransactions = () => {
  return JSON.parse(localStorage.getItem("transactions")) || [];
};

export default { saveTransactions, getTransactions };
