import React, {useState} from 'react';
import { connect } from 'react-redux';
import { makeStyles, MenuList, TextareaAutosize } from '@material-ui/core';
import './style.css';
import { NavLink,Router, Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import {SideBarData} from '../Components/SideBarData';



const useStyles = makeStyles(theme => ({
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
    }
}));


const Menus = (props) => {
    console.log(props.url)
    const classes = useStyles();
    console.log(SideBarData)

    return(
    <div className={classes.menuListContainer}>
        <div className={classes.logo}>
        <img src="" alt="kep"></img>
            <h2>LOGO</h2>
        </div>
        <ul className={classes.ul}>
{/* 
            <NavLink to="/informacio" style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <li className={classes.li}><span style={{position:"relative", right:"20px"}}><InfoIcon></InfoIcon></span>Információ</li>
            </NavLink>
            
            <NavLink to="/adminok" style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <li className={classes.li}><span style={{position:"relative", right:"20px"}}><InfoIcon></InfoIcon></span>Adminok</li>
            </NavLink>

            <NavLink to="/jatekosok" style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <li className={classes.li}><span style={{position:"relative", right:"20px"}}><InfoIcon></InfoIcon></span>Játékosok</li>
            </NavLink>

            <NavLink to="/premiumshop" style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <li className={classes.li}><span style={{position:"relative", right:"20px"}}><InfoIcon></InfoIcon></span>Prémium shop</li>
            </NavLink>

            <NavLink to="/jarmuvek" style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <li className={classes.li}><span style={{position:"relative", right:"20px"}}><InfoIcon></InfoIcon></span>Járművek</li>
            </NavLink>

            <NavLink to="/ingatlanok" style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <li className={classes.li}><span style={{position:"relative", right:"20px"}}><InfoIcon></InfoIcon></span>Ingatlanok</li>
            </NavLink>
            
            <NavLink to="/frakcio" style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <li className={classes.li}><span style={{position:"relative", right:"20px"}}><InfoIcon></InfoIcon></span>Frakció</li>
            </NavLink>

            <NavLink to="/beallitasok" style={{ textDecoration: 'none' }} activeClassName={classes.active}>
                <li className={classes.li}><span style={{position:"relative", right:"20px"}}><InfoIcon></InfoIcon></span>Beállítások</li>
            </NavLink> */}

            {SideBarData.map((item,index) => {
                return(
                    <li className={classes.li} key={index}>
                        <Link to ={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}

        </ul>
    </div>
    );

};

export default Menus;
