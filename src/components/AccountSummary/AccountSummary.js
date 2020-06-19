import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TransactionContext } from '../../contexts/TransactionContext'

const useStyles = makeStyles({
  root: {
    minWidth: 120
  },

  content: {
    textAlign: 'center'
  }
});

export const AccountSummary = () => {
  const classes = useStyles();
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions.map(t => t.amount);
  const incomes = amounts.filter(a => a > 0);
  const expenses = amounts.filter(a => a < 0);
  const totalIncome = incomes.reduce((total, income) => (total += income), 0).toFixed(2);
  const totalExpenses = (expenses.reduce((total, expense) => (total += expense), 0) * -1).toFixed(2);
  return (
    <Grid container spacing={2} justify="center">
      <Grid item>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography gutterBottom>Income</Typography>
            <Typography>${totalIncome}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography gutterBottom>Expense</Typography>
            <Typography>${totalExpenses}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}