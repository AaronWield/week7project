import React from "react";
import { Container, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { url } from "inspector";
import {Card, CardGroup, Row, Col } from 'react-bootstrap';
import { idText } from "typescript";

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    }, 
    weather: {
        width: '20em',
        height: '20em',
        paddingRight: '100px',
        paddingLeft: '50px',
        paddingTop: '50px'
    },
    fict: {
        width: '20.5em',
        height: '20em',
        paddingRight: '100px',
        paddingLeft: '45px',
        paddingTop: '20px'
    },
    f1: {
        width: '20em',
        height: '20em',
        paddingRight: '100px',
        paddingLeft: '50px',
        paddingTop: '50px'
    },
    text: {
        color: 'white',
        paddingLeft:'100px',
        paddingTop: '10px',
        textTransform: 'none',
        textAlign: 'center'
    },
    main: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60)',
        position: 'absolute',
    }, 
})

interface Props{
    title: string
}

export const Portfolio = (props:Props) =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Aaron Wieldraayer</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className={classes.nav_a}>Portfolio</Link>
                        </li>
                        <li>
                            <a className={classes.nav_a} href="https://drive.google.com/file/d/1qI0sGHyZsko0TGtOCGo4B6mkhMe7yOTG/view?usp=sharing" target="_blank">Resume</a>
                        </li>
                        <li>
                            <Link to="/information" className={classes.nav_a}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main} >
                <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                    <li className={classes.weather}>
                        <a href="https://github.com/AaronWield/week6project" target="_blank">
                            <img className={classes.weather} src="https://media2.giphy.com/media/vNg01outFUVhyKGiB2/giphy.gif" 
                            alt="Weather App" />
                        </a>
                        <p className={classes.text}>
                            Weather App that displays the current weather for any city in the world.
                        </p>
                    </li>
                    <li className={classes.fict}>
                        <p className={classes.text}>Open-source API allowing any one to sign up and add their favorite fictional characters!</p>
                        <a href="https://github.com/AaronWield/week7hw" target="_blank">
                            <img className={classes.fict} src="https://thumbs.gfycat.com/BonyScalyAsiansmallclawedotter-size_restricted.gif" 
                            alt="Fictional Characters API" />
                        </a>
                        
                    </li>
                    <li className={classes.f1}>
                        <a href="https://github.com/AaronWield/week6day3HW" target="_blank">
                            <img className={classes.f1} src="https://www.motorsportweek.com/wp-content/uploads/2020/06/jm1901de486-Custom.jpg" 
                            alt="F1 Standings" />
                        </a>
                        <p className={classes.text}>
                            Receive the top 7 drivers in the F1 standings for any year at any race during that season.
                        </p>
                    </li>
                </ul>
            </main>
        </div>
    )
}
