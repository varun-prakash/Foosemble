import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';


import NavigationItems from '../NavigationItems/NavigationItems';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';




const toolbar = ( props ) => (

    <AppBar position="static">
    <Toolbar>
        <div className={classes.DrawerToggle}>
        <MenuIcon onClick={props.drawerToggleClicked}  />
        </div>
    {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
    <div className={classes.Logo}>
            <Logo />
        </div>
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
      spacing={24}
    >
      <Grid item>
      <nav className={classes.DesktopOnly}>
            <NavigationItems />
         </nav>
      </Grid>
      </Grid>
    

    </Toolbar>
  </AppBar>

    // <header className={classes.Toolbar}>
    //     <DrawerToggle clicked={props.drawerToggleClicked} />
        // <div className={classes.Logo}>
        //     <Logo />
        // </div>
    //     <nav className={classes.DesktopOnly}>
    //         <NavigationItems />
    //     </nav>
    // </header>
);

export default toolbar;