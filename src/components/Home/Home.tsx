import React from "react";
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { url } from "inspector";

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
    main: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?landscape)',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    main_text1:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        paddingTop: '50px',  
        }
})

interface Props{
    title: string
}

export const Home = (props:Props) =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Coding Portfolio</a>
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
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>Welcome, World</h1>
                    <p className={classes.main_text1}>I am Aaron, software developer. Take a look around!</p><br />
                    <Link to="/information">Contact Me</Link>
                </div>
            </main>
        </div>
    )
}