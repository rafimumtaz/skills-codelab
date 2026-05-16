import React, { useState } from 'react';

export default function ExpenseForm({ onAddExpense, income, onSetIncome }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    
    onAddExpense({
      name,
      amount: parseFloat(amount),
      frequency
    });
    
    setName('');
    setAmount('');
  };

  return (
    <div className="glass-panel">
      <h3 style={{marginBottom: '1.5rem'}}>Configuration</h3>
      
      <div className="form-group">
        <label>Monthly Income (Rp)</label>
        <input 
          type="number" 
          className="form-input" 
          value={income || ''} 
          onChange={(e) => onSetIncome(parseFloat(e.target.value) || 0)}
          placeholder="e.g. 5000000"
        />
      </div>

      <hr style={{border: 'none', borderTop: '1px solid var(--card-border)', margin: '2rem 0'}} />
      
      <h3 style={{marginBottom: '1.5rem'}}>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Expense Name</label>
          <input 
            type="text" 
            className="form-input" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rent, Coffee, Insurance"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Amount (Rp)</label>
          <input 
            type="number" 
            className="form-input" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            step="1"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Frequency</label>
          <select 
            className="form-input" 
            value={frequency} 
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <button type="submit" className="btn">Add Expense</button>
      </form>
    </div>
  );
}
