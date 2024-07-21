import Balance from "@/components/Balance";
import Header from "@/components/Header";
import IncomeExpenses from "@/components/IncomeExpenses";
import TransactionForm from "@/components/Transactions/TransactionForm";
import TransactionList from "@/components/Transactions/TransactionList";

import GlobalProvider from "@/context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-slate-50 flex flex-col justify-center items-center h-screen p-4">
        <div className="flex flex-col gap-4 md:w-2/3">
          <Header />
          <main className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-2">
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">History</h3>
              <div>
                <TransactionList />
              </div>
            </div>
          </main>

          <footer>
            <p className="text-center text-slate-500 text-sm">
              Made with ❤️ by{" "}
              <a
                className="text-blue-500"
                href="https://github.com/JuanPQ26"
                target="_blank"
                rel="noreferrer"
              >
                JuanPQ26
              </a>
            </p>
          </footer>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
