import React from 'react';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { AccountSummary } from './components/AccountSummary/AccountSummary';
import AddTransaction from './components/AddTransaction/AddTransaction';
import {TransactionList} from './components/TransactionList/TransactionList';
import { TransactionProvider } from './contexts/TransactionContext'; 

const App = () => {
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