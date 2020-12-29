import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core';
import Info from '../Panels/Info';
import Admins from '../Panels/Admins';
import Fractions from '../Panels/Fractions';
import Houses from '../Panels/Houses';
import Players from '../Panels/Players';
import Premiumshop from '../Panels/Premiumshop';
import Settings from '../Panels/Settings';
import Vehicles from '../Panels/Vehicles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({

    box:{
        background:"#1d1d1d",
        width:"622px",
        height:"90%",
        float:"right",
        borderRadius:"25px",
        marginTop:"30px",
        marginRight:"30px",
        position:"relative",
    },

}));


const Container = (props) => {
    console.log("Kurva anyát!")
    console.log(props.url)
    console.log(window.location.pathname)
    const classes = useStyles();
    console.log(props)
    console.log(Admins)
    return (
        <React.Fragment>
            <div className={classes.box}>

            <Route path="/" component={Info}>
                    <Redirect to="/informacio" />
            </Route>
                <Route path="/informacio" component={Info}></Route>
                <Route path="/adminok" component={Admins}></Route>
                <Route path="/jatekosok" component={Players}></Route>
                <Route path="/premiumshop" component={Premiumshop}></Route>
                <Route path="/jarmuvek" component={Vehicles}></Route>
                <Route path="/ingatlanok" component={Houses}></Route>
                <Route path="/frakcio" component={Fractions}></Route>
                <Route path="/beallitasok" component={Settings}></Route>
            </div>
        </React.Fragment>
    );
};

export default Container;