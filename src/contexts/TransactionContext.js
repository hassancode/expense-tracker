import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        { id: 1, description: "Income 1", amount: 500 },
        { id: 2, description: "Expense 1", amount: -40 },
        { id: 3, description: "Income 2", amount: 600 },
        { id: 4, description: "Expense 2", amount: -10 }
    ]
}

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }
        }>
            {children}
        </TransactionContext.Provider>
    );
}