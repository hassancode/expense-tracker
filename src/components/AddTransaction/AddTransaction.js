import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { TransactionContext } from '../../contexts/TransactionContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '29ch',
  },
  amountField: {
    width: '15ch'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 110
  }
}));

let error = false;

const AddTransaction = ({ handleAddTransaction }) => {
  const [amount, setAmount] = useState();
  const [description, setDescription] = React.useState('');
  const classes = useStyles();


  const handleAmountChange = () => (event) => {
    let value = +event.target.value;
    if (isNaN(value)) {
      error = true;   
    } else {
      error = false;
    }
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const { transactions, addTransaction } = useContext(TransactionContext);

  function onSubmit(e) {
    e.preventDefault();
    if(error) return;
    const lastTransaction = transactions.sort((a, b) => b.id - a.id)[0];

    const transaction = {
      id: lastTransaction.id + 1,
      description,
      amount: +amount
    };
    addTransaction(transaction);
  }

  return (

    <div >
      <Typography variant="h6" gutterBottom>Add Transaction</Typography>
      <form onSubmit={onSubmit} className={classes.root}>
        <FormControl className={classes.formControl}>
          <TextField id="standard-basic" label="Description" value={description} onChange={handleDescriptionChange} className={classes.textField} required />
        </FormControl>
        <FormControl className={classes.margin} error={error} required>
          <InputLabel htmlFor="standard-adornment-amount" className={classes.textField}>- expense, + income</InputLabel>
          <Input
            id="standard-adornment-amount"
            className={classes.amountField}
            onChange={handleAmountChange('amount')}
            value={amount}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl>
          <Fab size="small" color="secondary" aria-label="add" className={classes.margin} type='submit'>
            <AddIcon />
          </Fab>
        </FormControl>
      </form>
    </div>

  )
}

export default AddTransaction;