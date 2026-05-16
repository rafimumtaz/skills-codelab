# Technical Specification: Real-time Budget Manager

## Executive Summary
A blazing-fast, real-time web application to intuitively manage salary expressions and budget distributions across daily, monthly, and yearly timeframes. The application provides immediate feedback on remaining balances, categorized spending, and visual insights of the user's financial health. It aims to eliminate friction completely by using a sleek, single-page application built on top of modern reactive web technologies.

## Requirements
### Functional Requirements
- **Input Income**: Allow users to configure their base salary/income stream (e.g., monthly).
- **Expense Tracking**: Add, edit, and delete expense items with categorization.
- **Timeframe Grouping**: Segregate expenses into recurring daily, monthly, and yearly buckets.
- **Real-time Calculations**: Display remaining budget across different time intervals automatically recalculating every time an input is changed.
- **Data Persistence**: Save user configurations and data locally (`localStorage` initially) ensuring privacy and zero-latency performance.
- **Visualizations**: Simple progress indicators to indicate percentage of budget consumed.

### Non-Functional Requirements
- **Performance**: Instantaneous updates without page reloads.
- **Responsiveness**: Fully usable on mobile, tablet, and desktop viewports.
- **UX/Aesthetics**: Premium, modern, engaging UI (vibrant colors, glassmorphism, dynamic animations, modern typography).
- **Zero-Friction Onboarding**: No complex sign-up needed for initial usage.

## Architecture & Tech Stack
To satisfy the "fast, real-time" and "premium design" requirements, we will build this as a modern Single Page Application (SPA).
- **Framework**: React via Vite. This provides lightning-fast hot module replacement, instant re-renders, and is best suited for real-time reactivity.
- **Styling**: Vanilla CSS for complete customizable flexibilty, adhering to modern UI/UX principles (CSS variables for theming, CSS Grid/Flexbox for layout).
- **Data Storage**: Client-side storage (`localStorage` via custom React hooks) to ensure immediate availability and privacy.

### Project Layout
- `src/components/`: Modular React components (e.g., `ExpenseList.jsx`, `BudgetSummary.jsx`, `ExpenseForm.jsx`).
- `src/styles/`: Vanilla CSS stylesheets and a robust `index.css` serving as our design system base.
- `src/hooks/`: Custom state management logic to interface with `localStorage`.
- `src/App.jsx`: Main application container.

## State Management
We will use React's built-in `Context API` combined with hooks or a lightweight reactive approach to manage the global state of income and expenses.
Data flow:
- **Global State holds**: `income` (number), `expenses` (array of objects: `{id, amount, name, frequency: 'daily'|'monthly'|'yearly'}`).
- **Derived State**: `dailyBudget`, `monthlyBudget`, `yearlyBudget`, totals for each category.
- Updates flow from form inputs -> state update -> automatic re-evaluation of derived metrics -> trigger UI re-renders for instantaneous feedback.
