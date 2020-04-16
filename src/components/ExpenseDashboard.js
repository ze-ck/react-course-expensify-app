import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseList />
        <ExpensesSummary />
        <ExpenseListFilters />
    </div>
);

export default ExpenseDashboardPage;