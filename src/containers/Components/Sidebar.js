import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core';
import {SideBarData} from '../Components/SideBarData';
import { NavLink,Router, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    box2:{
        width:"180px",
        margin:"0 auto",
        height:"100%",
        float:"left",
        borderRadius:"25px",
    },

    logo:{
        textAlign:"center",
        padding:"20px",
    },
    ul:{
        listStyle:"none",
    },
    li:{
        padding:"20px",
        textDecorationLine:"none",
        color:"white",
        "&:hover":{
            background:"#1db46f",
            borderRadius:"25px 25px 0px 25px",
            paddingLeft:"20px"
        },
        display:"flex",
        alignContent:"center"
    },
    a:{
        "&:active":{
            background:"#1db46f",
            borderRadius:"25px 25px 0px 25px",
        }
    },

}));


const Sidebar = (props) => {
    const classes = useStyles();
    console.log(props)
    return (
    <div className={classes.box2}>

        <div className={classes.menuListContainer}>
            <div className={classes.logo}>
            <img src="" alt="kep"></img>
                <h2>LOGO</h2>
            </div>
            <ul className={classes.ul}>

                
            {SideBarData.map((item,index) => {
                    return(
                        <li className={classes.li} key={index}>
                            <Link to = {item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </div>

        </div>
    );
};

export default Sidebar;