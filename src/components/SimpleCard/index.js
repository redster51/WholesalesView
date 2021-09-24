import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    rootCard: {
        padding: '1rem 2rem 1rem 1rem',
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    sideCard: {
        padding: '1rem 2rem 1rem 1rem',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '20px'
    },
    cardContent: {
        marginLeft: '1rem'
    },
    image: {
        height: '80px',
        width: 'auto',
    },
    imageLess: {
        height: '60px',
        width: 'auto',
    },
    primaryHeader: {
        fontWeight: '700',
        letterSpacing: '.1rem'
    },
    sideHeader: {
        fontWeight: '500',
    },
    colorContent: {
        marginLeft: '1rem',
        position: 'absolute',
        top: '11rem',
    },
    link: {
        textDecoration: 'none',
        '&:active, &:hover': {
            color: 'black',
            textDecoration: 'underline'
        },
    },
    headerDescriptionContent: {
        display: 'flex'
    },
    textMargin: {
        marginTop: '.5rem',
        marginBottom: '1rem'
    }

}));

const GetMoneyBack = () => {
    const loggedUser = localStorage.getItem('user');

    if (loggedUser) localStorage.removeItem('user');
    else return;

    const user = JSON.parse(loggedUser);
    user.amount = '0$'

    localStorage.setItem('user', JSON.stringify(user))
    window.location.reload(false)
}

const AddLink = (isPrimary, link, isProfile, isMoney) => {
    const classes = useStyles();

    if (!isPrimary || !isProfile) {
        return <Link className={classes.link} to={link} onClick={isMoney ? GetMoneyBack : ''}>
            <Typography variant='body2' color='textPrimary' style={{ marginTop: '1rem' }}>{isMoney ? 'Get money back' : 'More details'}</Typography>
        </Link>
    }
}

const CleanUserData = () => {
    if(localStorage.getItem("user")){
        localStorage.removeItem("user");
    }

    if(localStorage.getItem("feesForUser")) {
        localStorage.removeItem("feesForUser");
    }

    if(localStorage.getItem("ordersForUser")) {
        localStorage.removeItem("ordersForUser");
    }
}

const AddSpecificLinks = (isProfile, id) => {
    const classes = useStyles();

    if (isProfile) {
        return <div>
            <Link className={classes.link} to={`/profile/${id}`}>
                <Typography variant='body2' color='textPrimary' style={{ marginTop: '1rem' }}>Get all data</Typography>
            </Link>
            <Link onClick={CleanUserData} className={classes.link} to='/'>
                <Typography variant='body2' color='textPrimary' style={{ marginTop: '1rem' }}>Exit</Typography>
            </Link>
        </div>
    }
}

export default function SimpleCard({ header, content, isPrimary, isColor, isProfile, icon, link, id, isMoney }) {
    const classes = useStyles()

    return <div
        className={isPrimary ? classes.rootCard : classes.sideCard}
        style={isColor ? { display: 'block' } : {}}>
        <img className={isPrimary ? classes.image : classes.imageLess} src={icon} />
        <div className={isColor ? classes.colorContent : classes.cardContent}>
            <Typography
                variant='h6'
                className={isPrimary ? classes.primaryHeader : classes.sideHeader}
                gutterBottom={true}>{header}
            </Typography>
            <div style={isColor ? { margin: '2rem 0 3.5rem 0' } : { marginTop: '1rem' }}>
                {content.map((item, index) => (
                    <div className={classes.headerDescriptionContent}>
                        <Typography
                            variant={isPrimary ? 'body1' : 'body2'}
                            gutterBottom={true}
                            style={isColor ? { color: 'black' } : { color: 'grey' }}
                            className={index == (content.length - 1) && isProfile ? classes.textMargin : ''}>{item.header}
                        </Typography>
                        <Typography
                            variant={isPrimary ? 'body1' : 'body2'}
                            gutterBottom={true}
                            className={index == (content.length - 1) && isProfile ? classes.textMargin : ''}>: {item.description}
                        </Typography>
                    </div>
                ))}

                {AddSpecificLinks(isProfile, id)}
            </div>

            {AddLink(isPrimary, link, isProfile, isMoney)}

        </div>
    </div>
};
