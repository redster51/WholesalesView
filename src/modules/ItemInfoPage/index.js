import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import 'react-bnb-gallery/dist/style.css'
import {
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    LinearProgress,
    Grid,
    Paper,
    ButtonGroup
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Gallery from 'react-grid-gallery';
import Header from "../Navigation/Header";
import StickyFooter from "../Navigation/Footer";

import { data } from './data';

import { useStyles } from './styles';

function ItemInfoPage() {
    const classes = useStyles();
    const { id } = useParams();

    const [itemData, setItemData] = useState({});
    const [length, setLength] = useState(1);
    const [itemInfo, setItemInfoPage] = useState('1');
    const [activeButtonColor, setActiveButtonColor] = useState(true);
    const [activeButtonColor2, setActiveButtonColor2] = useState(false);
    const [activeButtonColor3, setActiveButtonColor3] = useState(false);

    const [counter, setCounter] = useState(1);

    const history = useHistory();

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        if (counter > 0) setCounter(counter - 1);
    };


    useEffect(() => {
        //TODO: get data by id from endpoint;
        const itemById = data.find((item) => item.id === Number(id));
        setLength(itemById.photos.length);
        setItemData(itemById);
    }, [id])

    const addToCard = () => {
        const loggedInUser = localStorage.getItem('user')
        if(loggedInUser){
            const foundUser = JSON.parse(loggedInUser)
            foundUser.fees.push(id)
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(foundUser))
        }else{
            history.push('/login')
        }
     };

    const order = () => { 
        addToCard();

        const loggedInUser = localStorage.getItem('user')
        if(loggedInUser){
            const foundUser = JSON.parse(loggedInUser)

            foundUser.orders.push({ feeId: parseInt(id), count: counter });
            foundUser.fees.pop();

            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(foundUser))

            history.push(`/checkout/${foundUser.id}/${foundUser.orders.length - 1}`)
        }else{
            history.push('/login')
        }
        
    };

    const handleButtonClick = (isActive) => {
        setActiveButtonColor(isActive);
        setActiveButtonColor2(!isActive);
        setActiveButtonColor3(!isActive);
     };

    const handleButtonClick2 = (isActive) => {
        setActiveButtonColor(!isActive);
        setActiveButtonColor2(isActive);
        setActiveButtonColor3(!isActive);
    };

    const handleButtonClick3 = (isActive) => {
        setActiveButtonColor(!isActive);
        setActiveButtonColor2(!isActive);
        setActiveButtonColor3(isActive);
    };

    function IncrementButton() {

        return <ButtonGroup size="small" aria-label="small outlined button group">
            <Button onClick={handleDecrement}>-</Button>
            <Button disabled style={{ color: 'black', borderColor: 'rgba(0, 0, 0, 0.23)' }}>{counter}</Button>
            <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
    }

    function GetPageByItemInfo(){
        if (itemInfo === '1') {
            return <Container className={classes.displayInfo}>
                <Typography align='justify'>
                    {itemData.fullDescription}
                </Typography>
            </Container>
        }
        else if(itemInfo === '2'){
            return <Grid container direction="row" justify="center" alignItems="center" className={classes.gridMargin}>
                        {itemData.technicalInfo.map((value) => (
                            <Grid item xs={4}>
                                <Paper className={classes.paper} elevation='2'>
                                    <h1>{value.fieldValue}</h1>
                                    <Typography>{value.fieldName}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>            
        }else{
            return <div className={classes.imageContainer}>
                <Gallery images={itemData.photos} margin='3rem' backdropClosesModal={true}/>
            </div> 
        }
    }

    return (
        <div>
            <Header isHomePage={false} />
            <div className={classes.itemInfoContent}>
                <CardMedia
                    className={classes.cardMedia}
                    image={itemData.imgSrc}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <div>
                        <div className={classes.cardTypeContainer}>
                            <Typography gutterBottom className={classes.typoCategory}>
                                {itemData.type}
                            </Typography>
                        </div>
                        <Typography gutterBottom className={classes.typoTitle}>
                            {itemData.title}
                        </Typography>
                        <Typography className={classes.typoDescription}>
                            {itemData.description}
                        </Typography>
                        <div>
                            {IncrementButton()}
                        </div>
                    </div>
                    <div className={classes.progressData}>
                        <Typography className={classes.categoryLink}>Left: {itemData.countLeft}</Typography>
                        <div>
                            <div className={classes.raisedContainer}>
                                <div>${itemData.raised} USD raised</div>
                                <div>{itemData.raisedPercentage}%</div>
                            </div>
                            <LinearProgress
                                variant="determinate"
                                value={Number(itemData.raisedPercentage)}
                                classes={{
                                    colorPrimary: classes.progressBarColorPrimary,
                                    barColorPrimary: classes.progressBarColor,
                                    root: classes.progressBarShape
                                }}
                            />
                        </div>
                        <div className={classes.timeLeftContainer}>
                            <Typography className={classes.daysLeftText}>
                                {itemData.daysLeft} days left
                            </Typography>
                        </div>
                    </div>
                    <CardActions className={classes.cardTypeContainer}>
                        <div>
                            <Button variant="contained" color="secondary" className={classes.cardMargingRight} onClick={addToCard}>
                                Add to card
                            </Button>
                            <Button variant="outlined" color="secondary" onClick={order}>
                                Order
                            </Button>
                        </div>
                        <div>
                            <label className={classes.cardPriceLabel}>{itemData.currency}{(itemData.price * counter).toFixed(2)}</label>
                        </div>
                    </CardActions>
                </CardContent>
            </div>
            <div>
                <div className={classes.cardItemOptions}>
                    <div onClick={() => setItemInfoPage(1)} onClickCapture={() => handleButtonClick(true)} className={activeButtonColor ? classes.activeButton : classes.standardButton}>
                        <Button>Description</Button>
                    </div>
                    <div onClick={() => setItemInfoPage(2)} onClickCapture={() => handleButtonClick2(true)} className={activeButtonColor2 ? classes.activeButton : classes.standardButton}>
                        <Button>Technical parameters</Button>
                    </div>
                    <div className={classes.standardButton}>
                        <Button onClick={() => setItemInfoPage(3)} onClickCapture={() => handleButtonClick3(true)} className={activeButtonColor3 ? classes.activeButton : classes.standardButton}>Photos</Button>
                        <Typography className={classes.imageMenuNumber}>{length}</Typography>
                    </div>
                </div>
            </div>
            <div>
                {GetPageByItemInfo()}
            </div>
            <StickyFooter />
        </div>
    )
}

export { ItemInfoPage };
