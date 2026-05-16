import React from 'react';

export default function ExpenseList({ expenses, onRemove }) {
  if (expenses.length === 0) {
    return (
      <div className="glass-panel" style={{textAlign: 'center', padding: '3rem 1rem'}}>
        <p style={{color: 'var(--text-muted)'}}>No expenses added yet.</p>
        <p>Start tracking by adding an expense!</p>
      </div>
    );
  }

  // Sort by highest amount
  const sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount);

  return (
    <div className="glass-panel">
      <h3 style={{marginBottom: '1.5rem'}}>Expense Breakdown</h3>
      <ul className="expense-list">
        {sortedExpenses.map(expense => (
          <li key={expense.id} className="expense-item">
            <div className="expense-info">
              <h4>{expense.name}</h4>
              <span className="expense-meta">
                Rp {parseFloat(expense.amount).toLocaleString('id-ID')}
                <span className={`badge badge-${expense.frequency}`}>{expense.frequency}</span>
              </span>
            </div>
            <button 
              className="btn btn-danger" 
              onClick={() => onRemove(expense.id)}
              style={{width: 'auto'}}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
