import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core';
import Cards from '../Components/Cards';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { SplineSeries } from "@devexpress/dx-react-chart";

import { EventTracker } from '@devexpress/dx-react-chart';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import LineChart from '../Components/LineChart';
import { render } from "react-dom";

const useStyles = makeStyles((theme) => ({

    container:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        alignContent:"center",
        position:"relative",
        top:"-80px",
    },
    welcomeBox:{
        width:"80%",
        background:"black",
        color:"white",
        borderRadius:"25px",
        height:"150px",
        position:"relative",
        top:"-15px",
        padding:"0px 15px 0 15px",
        textAlign:"center",
    },
    graph:{
        position:"absolute",
        width:"100%",
        height:"100% !important",
        borderRadius:"15px",
        padding:"15px 15px 5px 5px",
        background:"black",
    },
    paper:{
        margin:"10px",
        height:"100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"transparent !important",
        boxShadow:"none !important",

    },
    graphPaper:{
        height:"222px",
        borderRadius:"20px",
        marginRight:"9px",
        marginTop:"5px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"transparent !important",
        position:"relative",
        boxShadow:"0px 2px 1px -1px rgb(49 241 104 / 20%), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },

}));


const data = [
    { argument: "20:30", splineValue: 10, anyam2:20 , anyam:12 },
    { argument: "21:00", splineValue: 20 ,anyam2:40,anyam:30 },
    { argument: "22:00", splineValue: 30, anyam2:60, anyam:40 },
    { argument: "23:00", splineValue: 40 ,anyam2:80, anyam:12 },
    { argument: "24:00", splineValue: 50 ,anyam2:100, anyam:12 },
  ];

  const InfoBox = (props) =>{

    const classes = useStyles();
    return(
        <div className={classes.welcomeBox}>
        <img style={{width:"185px", float:"right", position:"absolute",bottom:"0",left:"350px"}} src="https://www.pinclipart.com/picdir/big/51-519733_other-popular-clip-arts-michael-gta-v-png.png"></img>
        <h1 style={{textAlign:"left", marginTop:"10px"}}>Hello {props.name}</h1>
        <h2 style={{textAlign:"left"}}>Jelenlegi munkád: {props.job}</h2> 
        <p style={{textAlign:"left"}}>{props.welcomeMessage}</p>
        </div>
    )
  }



const Info = (props) => {
    const classes = useStyles();
    let teszt = props.location.pathname == "/informacio"
    console.log(props.location.pathname == "/informacio")
    console.log(props.location.pathname.match("/informacio"))
    if (props.location.pathname != "/informacio"){
        console.log("NULL")
        console.log(props.location.pathname)
        return null;
      }

        return(
            <React.Fragment>
                <h2 style={{color:"white"}}>INFO MENU</h2>

            <Grid direction="row" container justify="center" alignItems="center">

                <InfoBox name="Béla" job="Munkanélküli" welcomeMessage="Üdv a szerveren!"></InfoBox>


                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Cards price={"$ 1500"} color="#fff" text="Készpénz"></Cards>
                        </Paper>
                    </Grid>

                    <Grid item  xs={4}>
                    <Paper className={classes.paper}>
                        <Cards price={"$ 1500"} color="pink" text="Bank számla"></Cards>
                        </Paper>
                    </Grid>

                    <Grid item  xs={4}>
                        <Paper className={classes.paper}>
                        <Cards price={"$ 0"} color="blue" text="Piszkos pénz"></Cards>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Cards price={"15:12"} color="lightblue" text="Játékidő"></Cards>
                        </Paper>

                        <Paper className={classes.paper}>
                            <Cards price={"15 óra"} color="red" text="Össz játékidő"></Cards>
                        </Paper>


                    </Grid>

                    <Grid item xs={8}>
                        <Paper className={classes.graphPaper}>
                        <Chart data={data} className={classes.graph} width={"50%"} height={"50%"} >
                            <ArgumentAxis showGrid={false} />
                            <ValueAxis showGrid={false} />
        
                            <SplineSeries color="green" valueField="splineValue" argumentField="argument" />
                            <EventTracker />
                            <Tooltip />
                            {/* <Animation></Animation> */}
                        </Chart>
                        </Paper>
                    </Grid>


            </Grid>
            </React.Fragment>
          )
};

export default Info;