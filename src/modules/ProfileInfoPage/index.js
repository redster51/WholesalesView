import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Button, FilledInput, InputLabel, InputAdornment, FormControl, Grid, Typography, FormControlLabel, Radio, FormLabel, RadioGroup } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Header from '../Navigation/Header';
import Footer from '../Navigation/Footer';
import { data } from '../Login/data';
import './index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '140px',
        marginBottom: '6rem'
    },
    gridContent: {
        justifyContent: 'space-around',
        width: '100%',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    borderGridCell: {
        border: 'solid',
        borderWidth: '.01rem',
        borderColor: 'rgb(198,198,198)',
    },
    marginLabel: {
        paddingTop: theme.spacing(1),
    },
    radioBox: {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    gridContentForm: {
        width: '80%',
        margin: theme.spacing(1),
        marginLeft: '10%',
    },
    formLay: {
        paddingTop: '1rem'
    },
    paddingSideCard: {
        padding: '1rem 0 1rem 1rem',
        marginBottom: '1rem'
    }
}));

export default function ProfileInfoPage() {

    const { id } = useParams();
    const [itemData, setItemData] = useState({});
    const history = useHistory();

    useEffect(() => {

        const loggedInUser = localStorage.getItem('user');
        const itemById = data.find((item) => item.id === Number(id));

        if (itemById === null) history.push('/*');
        else {
            const foundUser = JSON.parse(loggedInUser);

            if (loggedInUser) {

                if (itemById.id !== foundUser.id) history.push('/forbidden');
                else setItemData(foundUser);
            }
            else history.push('/forbidden');

        }
    }, [id])

    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (prop) => (event) => {
        setItemData({ ...itemData, [prop]: event.target.value });
    };

    const handleSaveButton = () => {

        localStorage.removeItem('user');

        localStorage.setItem('user', JSON.stringify(itemData))
        history.push(`/user/${itemData.id}`)
    }

    const handleDeleteAccount = () => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
        }

        if(localStorage.getItem("feesForUser")) {
            localStorage.removeItem("feesForUser");
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const renderProviderField = (role) => {
        if (role === 'provider') {
            return <div>
                <FormControl fullWidth className={classes.gridContentForm} variant="filled">
                    <InputLabel htmlFor="filled-adornment-settlementAccount">Settlement account</InputLabel>
                    <FilledInput
                        id="filled-adornment-settlementAccount"
                        value={itemData.settlementAccount}
                        onChange={handleChange('settlementAccount')}
                    />
                </FormControl>
                <FormControl fullWidth className={classes.gridContentForm} variant="filled">
                    <InputLabel htmlFor="filled-adornment-payerAccountNumber">Payer Account Number</InputLabel>
                    <FilledInput
                        id="filled-adornment-payerAccountNumber"
                        value={itemData.payerAccountNumber}
                        onChange={handleChange('payerAccountNumber')}
                    />
                </FormControl>
                <FormControl fullWidth className={classes.gridContentForm} variant="filled">
                    <InputLabel htmlFor="filled-adornment-companyName">Company</InputLabel>
                    <FilledInput
                        id="filled-adornment-companyName"
                        value={itemData.companyName}
                        onChange={handleChange('companyName')}
                    />
                </FormControl>
            </div>
        }
    }

    return <div>
        <Header isHomePage={false} />
        <div className={classes.root}>
            <Grid container className={classes.gridContent} spacing={3}>
                <Grid item xs={5} className={classes.borderGridCell}>
                    <form className={classes.formLay}>
                        <Typography className={classes.gridContentForm}>Personal data</Typography>
                        <FormControl fullWidth className={classes.gridContentForm} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">New password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={itemData.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.gridContentForm} variant="filled">
                            <InputLabel htmlFor="filled-adornment-userName">First Name</InputLabel>
                            <FilledInput
                                id="filled-adornment-userName"
                                value={itemData.userName}
                                onChange={handleChange('userName')}
                            />
                        </FormControl>

                        <FormControl fullWidth className={classes.gridContentForm} variant="filled">
                            <InputLabel htmlFor="filled-adornment-phoneNumber">Phone number</InputLabel>
                            <FilledInput
                                id="filled-adornment-phoneNumber"
                                value={itemData.phoneNumber}
                                onChange={handleChange('phoneNumber')}
                                inputProps={{ maxLength: "11" }}
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.gridContentForm} variant="filled">
                            <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
                            <FilledInput
                                id="filled-adornment-email"
                                value={itemData.email}
                                onChange={handleChange('email')}
                                type="email"
                            />
                        </FormControl>
                        <FormControl fullWidth className={classes.gridContentForm} variant="filled">
                            <InputLabel htmlFor="filled-adornment-address">Address</InputLabel>
                            <FilledInput
                                id="filled-adornment-address"
                                value={itemData.address}
                                onChange={handleChange('address')}
                            />
                        </FormControl>
                        {renderProviderField(itemData.role)}
                        <FormControl fullWidth className={classes.gridContentForm} component="fieldset">
                            <FormLabel component="legend" className={classes.marginLabel} style={{ color: 'black' }}>Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" value={itemData.gender} className={classes.radioBox} onChange={handleChange('gender')}>
                                <FormControlLabel value='female' control={<Radio />} label="Female" />
                                <FormControlLabel value='male' control={<Radio />} label="Male" />
                                <FormControlLabel value='other' control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <Button onClick={handleSaveButton} className={classes.gridContentForm} variant="contained" style={{ backgroundColor: 'rgb(255, 183, 77)' }}>Save</Button>
                    </form>
                </Grid>
                <Grid style={{ maxWidth: 'initial' }} item xs={5}>
                    <Grid container spacing={3} >
                        <Grid item xs={12} className={classes.borderGridCell}>
                            <div className={classes.paddingSideCard}>
                                <Typography style={{ marginBottom: '1rem' }}>Deleting a personal account</Typography>
                                <Typography style={{ fontWeight: '600', marginBottom: '1.5rem' }}>As soon as your Personal Account is deleted, you will be automatically logged out.
                                    from the system and will no longer be able to log into this account.</Typography>
                                <Button variant="contained" style={{ backgroundColor: 'rgb(255, 183, 77)' }} onClick={handleDeleteAccount}>Delete a personal account</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        <Footer />
    </div>
}
