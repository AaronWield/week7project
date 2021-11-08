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
        backgroundImage: 'url(https://aaronwieldraayer.w3spaces.com/tennis.jpg?bypass-cache=1632183704)',
        position: 'absolute',
    }, 
    container: {
        display: 'block',
    }
})

interface Props{
    title: string
}

export const Information = (props:Props) =>{
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
            <main className={classes.main}>
                <div className="contact">
                    <h2 className="">Contact Me</h2>
                    <br />
                    <a href="https://github.com/AaronWield"><img src="https://my-website-4b8ea.web.app/assets/github.png" alt="Github"/></a>
                    <br /><br />
                    <a href="https://www.linkedin.com/in/aaron-wieldraayer-562630219/"><img src="https://my-website-4b8ea.web.app/assets/linkedin.png" alt="LinkedIn"/></a>
                    <br /><br />
                    <a href="mailto:aaron.wieldraayer@gmail.com"><img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-1.png"/></a>
                </div>
            </main>
        </div>
    )
}

