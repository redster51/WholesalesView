import React from 'react';
import { useState } from 'react';
import { useStyles } from '../styles';
import { useHistory, Link } from 'react-router-dom';
import 'react-bnb-gallery/dist/style.css'
import {
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    ButtonGroup
} from '@material-ui/core';

export default function CartItem({ cartItem }) {

    const [counter, setCounter] = useState(1);

    const history = useHistory();

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        if (counter > 0) setCounter(counter - 1);
    };

    function OrderFee(id) {
        RemoveItem(id);

        const loggedInUser = localStorage.getItem('user');

        const foundUser = JSON.parse(loggedInUser);

        foundUser.orders.push({ feeId: id, count: counter });

        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(foundUser))

        history.push(`/checkout/${foundUser.id}/${foundUser.orders.length - 1}`)
    }

    function RemoveFee(id) {

        RemoveItem(id);

        window.location.reload(false)
    };

    function RemoveItem(id) {
        const loggedInUser = localStorage.getItem('user');
        const currentFees = localStorage.getItem('feesForUser')

        const foundUser = JSON.parse(loggedInUser);
        const userFees = JSON.parse(currentFees);

        let otherFees = userFees.filter(value => value.id != id)
        let userFeesList = foundUser.fees.filter(value => value != id)
        foundUser.fees = userFeesList

        localStorage.removeItem('feesForUser')
        localStorage.removeItem('user')

        localStorage.setItem('feesForUser', JSON.stringify(otherFees))
        localStorage.setItem('user', JSON.stringify(foundUser))
    };

    function IncrementButton() {

        return <ButtonGroup size="small" aria-label="small outlined button group">
            <Button onClick={handleDecrement}>-</Button>
            <Button disabled style={{ color: 'black', borderColor: 'rgba(0, 0, 0, 0.23)' }}>{counter}</Button>
            <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
    }

    const classes = useStyles();

    return <div className={classes.itemInfoContent} style={{ padding: '3rem' }}>
        <Link to={`/item/${cartItem.id}`} style={{width: '30%'}}>
            <CardMedia
                style={{backgroundSize: 'contain', width: '100%', height: '100%'}}
                image={cartItem.imgSrc}
                title="Image title"
            />
        </Link>
        <CardContent className={classes.cardContent}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '70%' }}>
                        <div className={classes.cardTypeContainer}>
                            <Typography gutterBottom className={classes.typoCategory}>
                                {cartItem.type}
                            </Typography>
                        </div>
                        <Typography gutterBottom className={classes.typoTitle}>
                            {cartItem.title}
                        </Typography>
                        <Typography className={classes.typoDescription}>
                            {cartItem.description}
                        </Typography>
                    </div>
                    <div style={{ marginTop: '5rem' }}>
                        <div>
                            {IncrementButton()}
                        </div>
                    </div>
                </div>
                <div className={classes.progressData}>
                    <Typography className={classes.categoryLink}>Status: {cartItem.countLeft > 0 ? 'Active' : 'Disable'}</Typography>
                    <div className={classes.timeLeftContainer}>
                        <Typography className={classes.daysLeftText}>
                            {cartItem.daysLeft} days left
                        </Typography>
                    </div>
                </div>
                <CardActions className={classes.cardTypeContainer}>
                    <div className={classes.buttonContainer}>
                        <Button variant="contained" color="secondary" className={classes.cardMargingRight} onClick={() => RemoveFee(cartItem.id)}>
                            Remove
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => OrderFee(cartItem.id)}>
                            Check out
                        </Button>
                    </div>
                    <div>
                        <label className={classes.cardPriceLabel}>{`${cartItem.currency}${(parseFloat(cartItem.price) * counter).toFixed(2)}`}</label>
                    </div>
                </CardActions>
            </div>
        </CardContent>
    </div>
}