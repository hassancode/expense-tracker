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
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '20ch',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const AddTransaction = ({ handleAddTransaction }) => {
  const [amount, setAmount] = useState(0.00);
  const [description, setDescription] = React.useState('');
  const classes = useStyles();

  const handleAmountChange = () => (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const { transactions, addTransaction } = useContext(TransactionContext);

  function onSubmit(e) {
    e.preventDefault();
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
      <Typography gutterBottom>Add Transaction</Typography>
      <form onSubmit={onSubmit} className={classes.root}>
        <FormControl className={classes.formControl}>
        <TextField id="standard-basic" label="Description" value={description} onChange={handleDescriptionChange} className={classes.textField} />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">- expense, + income</InputLabel>
          <Input
            id="standard-adornment-amount"
            className={classes.textField}
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