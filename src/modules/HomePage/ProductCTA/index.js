import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../../../components/Typography';
import TextField from '../../../components/TextField';
import Snackbar from '../../../components/Snackbar';
import Button from '../../../components/Button';
import { Card } from '../../../components';

import { data } from '../../FeesPage/Gallery/data'

const styles = (theme) => ({
    root: {
        marginTop: theme.spacing(12),
        marginBottom: 0,
        display: 'flex',
    },
    cardWrapper: {
        zIndex: 1,
    },
    card: {
        display: 'flex',
        justifyContent: 'start',
        backgroundColor: theme.palette.warning.light,
        padding: theme.spacing(8, 8),
    },
    cardContent: {
        maxWidth: 400,
    },
    textField: {
        width: '100%',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    button: {
        width: '100%',
        fontWeight: '900',
        letterSpacing: '0.05rem',
        backgroundColor: '#28282a',
        '&:active, &:focus, &:hover': {
            boxShadow: '0 2px 6px -4px rgb(0 0 0 / 20%), 0 8px 10px -4px rgb(0 0 0 / 14%), 0 8px 12px 4px rgb(0 0 0 / 5%)',
            backgroundColor: '#28282a',
        },

    },
    imagesWrapper: {
        position: 'relative',
    },
    header: {
        fontWeight: '700',
        lineHeight: '1.2',
        textTransform: 'uppercase'
    },
    text: {
        fontSize: '20px',
        fontFamily: '\'Work Sans\', sans-serif',
        fontWeight: '300',
        lineHeight: '1.334',
        letterSpacing: '.1rem'
    },
    customCard: {
        zIndex: '10',
        bottom: '32rem',
        left: '62%',
        display: 'flex',
        flexBasis: 'auto',
        position: 'relative',
    },
    CTAContainer : {
        height: '35rem',
    }
});

function ProductCTA(props) {
    const { classes } = props;
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const initialRandom = Math.random();
    const multiplied = initialRandom * data.length;
    const index = Math.floor(multiplied);

    let item = data[index];

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container className={classes.root} component="section">
            <Grid container className={classes.CTAContainer}>
                <Grid item xs={12} md={12} className={classes.cardWrapper}>
                    <div className={classes.card}>
                        <form onSubmit={handleSubmit} className={classes.cardContent}>
                            <Typography variant="h3" component="h3" gutterBottom className={classes.header}>
                                Receive notifications
                            </Typography>
                            <Typography variant="h5" className={classes.text}>
                                Get notifications about new fees, and keep abreast of current offers.
                            </Typography>
                            <TextField noBorder className={classes.textField} placeholder="Your email" />
                            <Button type="submit" color="primary" variant="contained" className={classes.button}>
                                Keep me updated
                            </Button>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.customCard}>
                    <Hidden smDown>
                        <Card className={classes.image} id={item.id}
                            imgSrc={item.imgSrc}
                            type={item.type}
                            title={item.title}
                            description={item.description}
                            countLeft={item.countLeft}
                            raised={item.raised}
                            raisedPercentage={item.raisedPercentage}
                            daysLeft={item.daysLeft}
                            key={`card-${item.type}-${item.index}`}
                            price={item.price}
                            isShadow={true} />
                    </Hidden>
                </Grid>
                

            </Grid>
            <Snackbar
                open={open}
                onClose={handleClose}
                message="We will send you our best offers, once a week."
            />
        </Container>
    );
}

ProductCTA.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);