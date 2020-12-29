import React,{lazy, useEffect,Suspense} from 'react';
import { connect } from 'react-redux';
import { makeStyles, TextareaAutosize } from '@material-ui/core';
import Iframe from 'react-iframe';
import Container from '../Components/Container';
import Sidebar from '../Components/Sidebar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

// import Fractions from '../Panels/Fractions';
// import Houses from '../Panels/Houses';
// import Players from '../Panels/Players';
// import Premiumshop from '../Panels/Premiumshop';
// import Settings from '../Panels/Settings';
// import Vehicles from '../Panels/Vehicles';

const Info = lazy(() => import('../Panels/Info'))
const Admins = lazy(() => import('../Panels/Admins'))
const Players = lazy(() => import('../Panels/Players'))
const Premiumshop = lazy(() => import('../Panels/Premiumshop'))
const Vehicles = lazy(() => import('../Panels/Vehicles'))
const Houses = lazy(() => import('../Panels/Houses'))
const Fractions = lazy(() => import('../Panels/Fractions'))
const Settings = lazy(() => import('../Panels/Settings'))

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'block',
        height: '638px',
        width: '845px',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        border: 'none',
        borderRadius:"25px",
        background:"black"
    },
    box:{
        background:"#1d1d1d",
        width:"629px",
        margin:"0 auto",
        height:"100%",
        float:"right",
        borderRadius:"25px"
    },
    box2:{
        width:"180px",
        margin:"0 auto",
        height:"100%",
        float:"left",
        borderRadius:"25px",
    },
    box3:{
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

export default connect()(props => {
    console.log(location.pathname)
      useEffect(() => {
        console.log(props)
        return () => {
        };
      }, []);
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
                    <Router>
                        <Sidebar></Sidebar>
                <div className={classes.box3}>

                <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/informacio" component={Info}></Route>
                            <Route path="/adminok" component={Admins}></Route>
                            <Route path="/jatekosok" component={Players}></Route>
                            <Route path="/premiumbolt" component={Premiumshop}></Route>
                            <Route path="/jarmuvek" component={Vehicles}></Route>
                            <Route path="/ingatlanok" component={Houses}></Route>
                            <Route path="/frakcio" component={Fractions}></Route>
                            <Route path="/beallitasok" component={Settings}></Route>
                        </Switch>
                </Suspense>
                </div>
                    </Router>
        </div>
    );
});
