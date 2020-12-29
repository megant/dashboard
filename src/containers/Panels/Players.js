import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core';
import PlayersTable from '../Components/PlayersTable';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({

    paper:{
      height:"100%",
      width:"100%",
      position:"relative",
      borderRadius:"20px",
      bottom:"-18px"
    }

}));


const Players = (props) => {
    const classes = useStyles();
    let teszt = props.location.pathname == "/jatekosok"

    if (props.location.pathname != "/jatekosok"){
        console.log("NULL")
        console.log(props.location.pathname)
        return null;
      }

      return(
        <React.Fragment>
            <h2 style={{color:"white"}}>PLAYERS MENU</h2>

            <Grid container justify="center">

              <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <PlayersTable></PlayersTable>
                  </Paper>
              </Grid>

            </Grid>
        </React.Fragment>
      )

};

export default Players;