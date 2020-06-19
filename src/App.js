import React, { useState } from 'react';
// import Cards from './components/Cards/Cards';
// import Transaction from './components/Transaction/Transaction'
// import ExpenseTable from './components/ExpenseTable/ExpenseTable';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { AccountSummary } from './components/AccountSummary/AccountSummary';
import AddTransaction from './components/AddTransaction/AddTransaction';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import {TransactionList} from './components/TransactionList/TransactionList';
import { TransactionProvider } from './contexts/TransactionContext'; //'./providers/TransactionProvider';

const App = () => {
    const [income, setIncome] = useState(1000.0);
    const [expenses, setExpenses] = useState(0.0);

    function addTransaction(value) {
        console.log(value);
    }

    return (
        <TransactionProvider>
            <Header />
            <Balance />
            <AccountSummary />
            <TransactionList/>
            <AddTransaction />
        </TransactionProvider>
    )
}

export default App;