import React, { useContext } from 'react'
import MaterialTable from 'material-table';
import { TransactionContext } from '../../contexts/TransactionContext';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        margin: '15px 0px'
    }
});

export const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(TransactionContext);
    const columns = [
        { title: 'Description', field: 'description' },
        { title: 'Amount', field: 'amount' }
    ];
   
    const classes = useStyles();

    return (
        
        <div className={classes.container}>
            <Typography variant="h6" gutterBottom>Transaction List</Typography>
            <MaterialTable
            title=''
                columns={columns}
                data={transactions}
                editable={{
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                deleteTransaction(oldData.id);
                                resolve();
                            }, 500);
                        })

                }}
                options={{
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
                    },
                    emptyRowsWhenPaging: false
                }}
            >
            </MaterialTable>
        </div>
    )
}