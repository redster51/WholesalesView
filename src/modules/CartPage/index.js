import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import { data } from '../Login/data';
import { useStyles } from './styles';
import 'react-bnb-gallery/dist/style.css'
import {
    Typography,
} from '@material-ui/core';
import emptyCart from '../../logo/icons8-empty-box-96.png';
import CartItem from './CartItem'

export default function CartPage() {

    const { id } = useParams();
    const [feesData, setFeesData] = useState([]);
    const history = useHistory();

    useEffect(() => {

        const loggedInUser = localStorage.getItem('user');
        const localFees = localStorage.getItem('fees');

        const itemById = data.find((item) => item.id === Number(id));

        if (itemById === null) history.push('/*');
        else {
            const foundUser = JSON.parse(loggedInUser);
            const allFees = JSON.parse(localFees);

            const fees = allFees.filter(item => foundUser.fees.includes(item.id))

            if (loggedInUser) {

                if (itemById.id !== foundUser.id) history.push('/forbidden');
                else {
                    setFeesData(fees);
                    localStorage.setItem('feesForUser', JSON.stringify(fees))
                }
            }
            else history.push('/forbidden');

        }
    }, [id]);

    const classes = useStyles();

    return <div>
        <Header isHomePage={false} />
        <Typography variant='h4' gutterBottom={true} style={{ marginTop: '5rem', fontWeight: '500', marginBottom: '1rem', paddingLeft: '3rem' }} className={classes.itemInfoContent}>Review your bag</Typography>
        {feesData.length === 0 ?
            (<div className={classes.itemInfoContent} style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h5' gutterBottom={true}>Cart is empty</Typography>
                <img alt="" style={{ width: '90px', height: 'auto' }} src={emptyCart} />
            </div>) : (<></>)}

        {feesData.map(itemData => (<CartItem cartItem={itemData} />))}
        <Footer isProfile={feesData.length < 2} />
    </div>
};
