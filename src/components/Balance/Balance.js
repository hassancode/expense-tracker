import React, { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionContext';

export const Balance = () => {
    const { transactions } = useContext(TransactionContext);
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((total, amount) => (total += amount), 0);
    return (

        <div>
            <h4>Current Balance</h4>
            <h1>${total}</h1>
        </div>
    )
} 