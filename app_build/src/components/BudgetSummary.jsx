import React from 'react';

export default function BudgetSummary({ income, stats }) {
  const percentUsed = income > 0 ? (stats.totalMonthlyEquivalent / income) * 100 : 0;
  
  let progressClass = '';
  if (percentUsed > 90) progressClass = 'danger';
  else if (percentUsed > 75) progressClass = 'warning';

  return (
    <>
      <div className="summary-cards">
        <div className="glass-panel stat-card">
          <div className="stat-title">Monthly Income</div>
          <div className="stat-value">Rp {income.toLocaleString('id-ID')}</div>
        </div>
        
        <div className="glass-panel stat-card">
          <div className="stat-title">Monthly Remaining</div>
          <div className={`stat-value ${stats.monthlyRemaining < 0 ? 'negative' : 'positive'}`}>
            Rp {stats.monthlyRemaining.toLocaleString('id-ID', {maximumFractionDigits: 0})}
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{marginBottom: '2rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
          <span className="stat-title">Budget Utilization</span>
          <span style={{fontWeight: 600}}>{percentUsed.toFixed(1)}%</span>
        </div>
        <div className="progress-container">
          <div 
            className={`progress-bar ${progressClass}`} 
            style={{width: `${Math.min(percentUsed, 100)}%`}}
          ></div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
          <span>Daily Run Rate: Rp {(stats.totalMonthlyEquivalent / 30).toLocaleString('id-ID', {maximumFractionDigits: 0})}/day</span>
          <span>Yearly Run Rate: Rp {(stats.totalMonthlyEquivalent * 12).toLocaleString('id-ID', {maximumFractionDigits: 0})}/yr</span>
        </div>
      </div>
    </>
  );
}
