import { useState, useEffect } from 'react';

export function useBudgetStore() {
  const [income, setIncome] = useState(() => {
    return parseFloat(localStorage.getItem('budget_income')) || 0;
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('budget_expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('budget_income', income);
  }, [income]);

  useEffect(() => {
    localStorage.setItem('budget_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now().toString() }]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  // Calculations
  const calculateTotalExpenses = (frequency) => {
    return expenses
      .filter(e => e.frequency === frequency)
      .reduce((sum, e) => sum + parseFloat(e.amount), 0);
  };

  const dailyExpenses = calculateTotalExpenses('daily');
  const monthlyExpenses = calculateTotalExpenses('monthly');
  const yearlyExpenses = calculateTotalExpenses('yearly');

  // Convert all to common monthly unit to find true monthly cost
  // Let's assume 30 days/month, 12 months/year for simplicity
  const totalMonthlyEquivalentExpenses = 
    (dailyExpenses * 30) + monthlyExpenses + (yearlyExpenses / 12);

  const monthlyRemaining = income - totalMonthlyEquivalentExpenses;

  return {
    income,
    setIncome,
    expenses,
    addExpense,
    removeExpense,
    stats: {
      daily: dailyExpenses,
      monthly: monthlyExpenses,
      yearly: yearlyExpenses,
      totalMonthlyEquivalent: totalMonthlyEquivalentExpenses,
      monthlyRemaining
    }
  };
}
