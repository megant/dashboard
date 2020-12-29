import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core';
import AdminTable from '../Components/AdminTable';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {browserHistory} from 'react-router';
import { useHistory ,useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    paper:{
        height:"100px",
        borderRadius:"15px"
    },
    paperTable:{
        height:"362px",
        borderRadius:"20px",
        position:"relative"
    }
}));

const Admins = (props) => {
    const location = useLocation()
console.log(location.pathname)
    const [display, setDisplay] = useState(false);
    console.log(props)
    let teszt = props.location.pathname == "/adminok"
    console.log(teszt+" TESZT")
    // useEffect(() => {
    //     console.log("update")
    //     setDisplay(true)
    //     return () => {
    //         console.log(teszt+"Maybe?")
    //     };
    //   }, [teszt]);

    //   useEffect(() => {
    //     return browserHistory.listen(Admins);
    //   }, []);
    //   if (!props.display) {
    //       setDisplay(false)
    //       console.log(props.display)
    //     return null
    //   }
    const classes = useStyles();
    // let teszt = props.location.pathname == "/adminok"
    // console.log(teszt)

    // if (props.location.pathname != "/adminok"){
    //     console.log("NULL")
    //     console.log(props.location.pathname)
    //     return null;
    // }

    return (

props.display ?

    <React.Fragment>
        <h2 style={{color:"white"}}>ADMINS MENU</h2>
        <Grid container justify="space-around">

            <Grid item xs={5}>
                <Paper className={classes.paper}>1</Paper>
            </Grid>

            <Grid item xs={5}>
                <Paper className={classes.paper}>2</Paper>
            </Grid>
        </Grid>


        <Grid container justify="center" style={{marginTop:"30px"}}>

            <Grid item xs={11}>
                <Paper className={classes.paperTable}>
                    <AdminTable display={true}></AdminTable>
                </Paper>
            </Grid>

        </Grid>

         </React.Fragment>

         : null

    );
};

export default Admins;