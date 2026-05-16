import React from 'react';
import { useBudgetStore } from './hooks/useBudgetStore';
import BudgetSummary from './components/BudgetSummary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const { income, setIncome, expenses, addExpense, removeExpense, stats } = useBudgetStore();

  return (
    <div className="container">
      <header>
        <h1>AeroBudget</h1>
        <p style={{color: 'var(--text-muted)'}}>Real-time dynamic budget tracking</p>
      </header>

      <div className="dashboard-grid">
        <div>
          <ExpenseForm 
            onAddExpense={addExpense} 
            income={income} 
            onSetIncome={setIncome} 
          />
        </div>
        
        <div>
          <BudgetSummary income={income} stats={stats} />
          <ExpenseList expenses={expenses} onRemove={removeExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
