import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';

const MainPage = () => (
    <div>
        <ExpensesFilter />
        <ExpenseList />
    </div>
);

export default MainPage;