import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
const useStyles = makeStyles((theme) => ({



    card:{
        background:"black",
        borderRadius:"15px",
        color:"#1db46f",
        width:"100%", //180px
        height:"100px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        paddingLeft:"20px",
        overflow:"hidden",
        boxShadow:"0px 2px 1px -1px rgb(49 241 104 / 20%), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    span:{
        transform:"rotate(90deg)",
        marginRight:"15px",
    },
    divSpan:{
        display:"flex",
        alignItems:"center"
    }
}));


const Cards = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.card}>
                    <p style={{margin:"0"}}>{props.text}</p>
                    <p style={{margin:"0"}}>{props.text2}</p>
                    <div className={classes.divSpan}>
                        <span className={classes.span}><ChangeHistoryIcon style={{color:props.color}}></ChangeHistoryIcon></span>
                        <p style={{fontWeight:"600", margin:"0"}}>{props.price}</p>
                    </div>
                    
            </div>
        </React.Fragment>
    );
};

export default Cards;