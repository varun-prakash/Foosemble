import React from 'react';

import Auxi from '../../../hoc/Auxi';
import Button from '@material-ui/core/Button';

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li> );
        } );

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button color="secondary" onClick={props.purchaseCancelled}>CANCEL</Button>
            <Button color="primary" onClick={props.purchaseContinued}>CONTINUE</Button>
        </Auxi>
    );
};

export default orderSummary;