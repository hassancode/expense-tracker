import React, { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionContext';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   container: {
       margin: '20px 0px'
   } 
});

export const Balance = () => {
    const { transactions } = useContext(TransactionContext);
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((total, amount) => (total += amount), 0);
    const classes = useStyles();
    return (

        <div className={classes.container}>
            <Typography variant="h6" gutterBottom>
                Current Balance:
             </Typography>
            <Typography variant="h3" gutterBottom>
                ${total}
            </Typography>
        </div>

    )
} 