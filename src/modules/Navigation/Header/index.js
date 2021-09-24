import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from '@material-ui/core/Link';

import PersonIcon from '@material-ui/icons/Person';
import logo from '../../../logo/logo.png';
import './index.css';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'white',
        position: 'fixed',
        width: '100%',
        top: '0',
        zIndex: '10000',
    },
    fixed: {

    },
    toolbarTitle: {
        flex: 1,
        marginLeft: '10rem'
    },
    toolbarTitle2: {
        flex: 1,
        marginLeft: '0'
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        marginTop: '5rem'
    },
    toolbarLink: {
        fontSize: '1.1rem',
        padding: theme.spacing(2),
        flexShrink: 0,
    },
    logoImage: {
        width: 70,
        height: 70,
        padding: 10,
    }
}));

const RenderIfUserNotLogged = (user) => {

    if (user && Object.keys(user).length === 0 && user.constructor === Object) {
        return <div>
            <Button variant="outlined" size="small" href="/login" style={{marginRight: '1rem'}}>
                Sign in
            </Button>
            <Button variant="outlined" size="small" href="/signup">
                Sign up
            </Button>
        </div>
    } else {
        let id = user.id

        return <>
            <Link href={`/user/${id}`} className="NavigationLink">
                <IconButton style={{ marginRight: '1rem' }}>
                    <PersonIcon className="NavigationButtonColor" fontSize='large' />
                    <Typography color='textPrimary' className="TypographyNavigationLabel">Profile</Typography>
                </IconButton>
            </Link>
            <Link href={`/cart/${id}`} className="NavigationLink">
                <IconButton >
                    <ShoppingCartIcon className="NavigationButtonColor" fontSize='large' />
                    <Typography color='textPrimary' className="TypographyNavigationLabel">Cart</Typography>
                </IconButton>
            </Link>
        </>
    }
}

const RenderIfHomePage = (isHomePage) => {
    const sections = [
        { title: 'New fees', url: '/fees' },
        { title: 'End soon', url: '#' },
        { title: 'Phone', url: '#' },
        { title: 'Laptop', url: '#' },
        { title: 'Tv', url: '#' },
        { title: 'About us', url: '#' },
    ];
    const classes = useStyles();

    if (isHomePage) {
        return <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {sections.map((section) => (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    className={classes.toolbarLink}
                >
                    {section.title}
                </Link>
            ))}
        </Toolbar>
    }
}


export default function Header(props) {

    const [user, setUser] = useState({});

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, [])

    const classes = useStyles();

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small" href='/'>
                    <img className={classes.logoImage} src={logo} />
                </Button>
                <Typography
                    component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                    noWrap
                    className={(user && Object.keys(user).length === 0 && user.constructor === Object)
                        ? classes.toolbarTitle2 : classes.toolbarTitle}
                >
                    Wholesales
                </Typography>
                {RenderIfUserNotLogged(user)}
            </Toolbar>
            {RenderIfHomePage(props.isHomePage)}

        </React.Fragment>
    );
}

Header.propTypes = {
    isHomePage: PropTypes.bool,
};
