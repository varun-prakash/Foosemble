import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '@material-ui/core/Button';


const CheckoutSummary = (props)=>{
  return(
<div className={classes.CheckoutSummary}>
<h1>Hope You Enjoy Your Burger</h1>

<div  className={classes.root}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className={classes.Root}>
            <Button size="Large" variant="contained" color="secondary" onClick={props.checkoutCancelled} className={classes.Root}>
          CANCEL
        </Button>
        {'    '}
        <Button size="Large" variant="contained" color="primary" onClick={props.checkoutContinued} className={classes.Root}>
          CONTINUE
        </Button>
        </div>

</div>
);

}


export default CheckoutSummary;