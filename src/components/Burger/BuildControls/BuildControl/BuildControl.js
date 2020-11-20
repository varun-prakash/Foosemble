import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>

        
        <div className={classes.Label}>{props.label}</div>

        <ButtonGroup disableElevation variant="contained" color="primary">
      <Button onClick={props.added}>+</Button>
      <Button onClick={props.removed} disabled={props.disabled}  color="secondary">-</Button>
    </ButtonGroup>
        
    </div>


);

export default buildControl;