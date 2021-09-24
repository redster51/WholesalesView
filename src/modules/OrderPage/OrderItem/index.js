import React from 'react';
import { useStyles } from '../styles';
import 'react-bnb-gallery/dist/style.css'
import {
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core';

export default function OrderItem({ orderItem, counter }) {

    const classes = useStyles();


    return <div className={classes.itemInfoContent} style={{ padding: '3rem' }}>
        <CardMedia
            className={classes.cardMedia}
            image={orderItem.imgSrc}
            title="Image title"
        />
        <CardContent className={classes.cardContent}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '80%' }}>
                        <div className={classes.cardTypeContainer}>
                            <Typography gutterBottom className={classes.typoCategory}>
                                {orderItem.type}
                            </Typography>
                        </div>
                        <Typography gutterBottom className={classes.typoTitle}>
                            {orderItem.title}
                        </Typography>
                        <Typography className={classes.typoDescription}>
                            {orderItem.description}
                        </Typography>
                    </div>
                </div>
                <div className={classes.progressData}>
                    <Typography className={classes.categoryLink}>Status: {orderItem.countLeft > 0 ? 'Active' : 'Disable'}</Typography>
                    <Typography style={{color: '#088366', fontWeight: '600'}} className={classes.categoryLink}>Count: {counter}</Typography>
                    <div className={classes.timeLeftContainer}>
                        <Typography className={classes.daysLeftText}>
                            {orderItem.daysLeft} days left
                        </Typography>
                    </div>
                </div>
                <CardActions className={classes.cardTypeContainer} style={{paddingLeft: '0'}}>
                    <div style={{display: 'flex'}}>
                        <Typography style={{color: '#088366', fontWeight: '600', fontSize: '1.5rem', marginRight: '1rem'}}>Total price: </Typography>
                        <label style={{paddingTop: '.15rem'}} className={classes.cardPriceLabel}>{`${orderItem.currency}${(parseFloat(orderItem.price) * counter)}`}</label>
                    </div>
                </CardActions>
            </div>
        </CardContent>
    </div>
}