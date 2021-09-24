import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../../components/SimpleCard'
import cart from '../../logo/icons8-shopping-cart.gif';
import orderList from '../../logo/icons8-purchase-order-100.png';
import profile from '../../logo/icons8-male-user-96.png';
import { data } from '../Login/data';
import usd from '../../logo/icons8-bank-96.png';
import feesLogo from '../../logo/icons8-purchase-order-90.png';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: '150px',
        paddingLeft: '2rem',
        paddingRight: '2rem',
    },
    rootGrid: {
        marginRight: '0 !impotrant',
        justifyContent: 'space-between',
    },
    rightRoot: {
        flexGrow: 1,
    },
    colorCard: {
        height: '250px',
        backgroundColor: 'rgb(255, 183, 77)',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '0.2px',
        borderRadius: '20px',
        marginBottom: '2rem',
        marginLeft: '2rem',
    },
    simpleCard: {
        height: '250px',
        marginLeft: '2rem',
        borderColor: 'rgb(198,198,198)',
        borderStyle: 'solid',
        borderWidth: '0.2px',
        borderRadius: '20px',
    },
    footer: {
        position: 'fixed',
        width: '100%',
        bottom: 0,
    }
}));

export default function ProfilePage() {

    const { id } = useParams();
    const [itemData, setItemData] = useState({});
    const [fees, setFeesData] = useState([]);
    const [orders, setOrderData] = useState([]);
    const history = useHistory();


    useEffect(() => {

        const loggedInUser = localStorage.getItem('user');
        const localFees = localStorage.getItem('fees');

        const itemById = data.find((item) => item.id === Number(id));

        if (itemById == null) history.push('/*');
        else {
            const foundUser = JSON.parse(loggedInUser);
            const allFees = JSON.parse(localFees);

            let activeFees = [];
            let orderList = [];

            if(foundUser.role == 'provider'){
                activeFees = allFees.filter(item => id == item.provider);
            }else {
                activeFees = foundUser.fees;
                orderList = foundUser.orders;
            }

            if (loggedInUser) {

                if (itemById.id != foundUser.id) history.push('/forbidden');
                else {
                    setItemData(foundUser);
                    setFeesData(activeFees);
                    setOrderData(orderList);
                    localStorage.setItem('feesForUser', JSON.stringify(activeFees))
                }
            }
            else history.push('/forbidden');

        }
    }, [id])

    const RenderLinkDependsOnRole = (role) => {
        if (role == 'provider') {
            return <Grid style={{ maxWidth: 'initial' }} item xs={3}>
                <SimpleCard
                    header='Fees List'
                    content={[{ header: 'Fees', description: fees.length }]}
                    icon={feesLogo}
                    link={`privider/fees/${itemData.id}`}>
                </SimpleCard>
            </Grid>
        } else {
            return <Grid style={{ maxWidth: 'initial' }} item xs={3}>
                <SimpleCard
                    header='Purchases List'
                    content={[{ header: 'Shopping', description: orders.length}]}
                    icon={orderList}
                    link={`/orders/${itemData.id}`}>
                </SimpleCard>
                <SimpleCard
                    header='Cart'
                    content={[{ header: 'Items', description: fees.length }]}
                    icon={cart}
                    link={`/cart/${itemData.id}`}>
                </SimpleCard>
            </Grid>
        }
    }

    const RederPrimaryCardDependOnRole = (role) => {
        if (role != 'provider') {
            return <Grid className={classes.simpleCard} item xs={5}>
                <SimpleCard
                    header='Money bank'
                    content={[{ header: 'Amount', description: itemData.amount }]}
                    isPrimary={true}
                    icon={usd}
                    isMoney={true}
                    link={`/user/${itemData.id}`}>
                </SimpleCard>
            </Grid>
        }
    }

    const classes = useStyles();

    return <div>
        <Header isHomePage={false} />
        <div className={classes.root}>
            <Grid className={classes.rootGrid} container spacing={5}>
                <Grid item xs={9}>
                    <Grid className={classes.rightRoot} container spacing={3}>
                        <Grid className={classes.colorCard} item xs={5}>
                            <SimpleCard
                                header={itemData.role != 'provider' ? 'Delivery' : 'Unconfirmed fees'}
                                content={itemData.role != 'provider' ? [{ header: 'Nereast', description: 'not expected' }] : [{ header: 'Fees count', description: '1' }]}
                                isPrimary={true}
                                isColor={true}
                                link={itemData.role != 'provider' ? '/' : `privider/fees/${itemData.id}`}>
                            </SimpleCard>
                        </Grid>
                        <Grid className={classes.simpleCard} item xs={5}>
                            <SimpleCard
                                header={itemData.userName}
                                content={[{ header: 'Email', description: itemData.email }, { header: 'Phone', description: itemData.phoneNumber }]}
                                isPrimary={true}
                                icon={itemData.photo ? itemData.photo : profile}
                                isProfile={true}
                                id={itemData.id}>
                            </SimpleCard>
                        </Grid>
                        {RederPrimaryCardDependOnRole(itemData.role)}
                    </Grid>
                </Grid>
                {RenderLinkDependsOnRole(itemData.role)}

            </Grid>
        </div>
        <Footer isProfile={itemData.role == 'provider'} />
    </div>
}
