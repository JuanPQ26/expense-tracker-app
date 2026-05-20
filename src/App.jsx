import Balance from "@/components/Balance";
import Header from "@/components/Header";
import IncomeExpenses from "@/components/IncomeExpenses";
import TransactionForm from "@/components/Transactions/TransactionForm";
import TransactionList from "@/components/Transactions/TransactionList";

import GlobalProvider from "@/context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <div className="min-h-screen bg-[#f0f2f5]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <Header />

          <main className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-3">
              <Balance />
              <IncomeExpenses />
              <div className="lg:hidden">
                <TransactionForm />
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-2">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
                  History
                </h2>
                <TransactionList />
              </div>
              <div className="hidden lg:block">
                <TransactionForm />
              </div>
            </div>
          </main>

          <footer className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-slate-200/60">
            <p className="text-center text-xs sm:text-sm text-slate-400 font-medium">
              Made with care by{" "}
              <a
                className="text-primary hover:text-primary-600 font-semibold transition-colors"
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
