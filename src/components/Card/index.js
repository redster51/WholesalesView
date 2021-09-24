import {
    Grid,
    Card as MaterialCard,
    CardMedia,
    CardContent,
    Typography,
    LinearProgress,
    IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, AccessTimeOutlined } from '@material-ui/icons';

import { useStyles } from './styles'

function Card({ id, imgSrc, type, title, description, countLeft, raised, raisedPercentage, daysLeft, price, isShadow }) {
    const classes = useStyles();

    return (
        <Grid item>
            <Link to={`/item/${id}`} className={isShadow ? classes.cardShadowContainer : classes.cardContainer}>
                <MaterialCard className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imgSrc}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <div>
                        <div className={classes.cardTypeContainer}>
                            <Typography gutterBottom className={classes.typoCategory}>
                                {type}
                            </Typography>
                            <IconButton classes={{ root: classes.iconButtonRoot }}>
                                <ShoppingCartOutlined />
                            </IconButton>
                        </div>
                        <Typography gutterBottom className={classes.typoTitle}>
                            {title}
                        </Typography>
                        <Typography className={classes.typoDescription}>
                            {description}
                        </Typography>
                    </div>
                    <div className={classes.progressData}>
                        <small className={classes.categoryLink}>Left: {countLeft}</small>
                        <div>
                            <div className={classes.raisedContainer}>
                                <div>${raised} USD raised</div>
                                <div>{raisedPercentage}%</div>
                            </div>
                            <LinearProgress
                                variant="determinate"
                                value={Number(raisedPercentage)}
                                classes={{
                                    colorPrimary: classes.progressBarColorPrimary,
                                    barColorPrimary: classes.progressBarColor,
                                }}
                            />
                        </div>
                        <div className={classes.timeLeftContainer}>
                            <div>
                                <IconButton classes={{ root: classes.timeButtonRoot }}>
                                    <AccessTimeOutlined />
                                </IconButton>
                                <Typography className={classes.daysLeftText}>
                                    {daysLeft} days left
                                </Typography>
                            </div>
                            <div>
                                <Typography className={classes.cardPriceLabel}>
                                    {price}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </CardContent>
                </MaterialCard>
            </Link>
        </Grid>
    )
}

export { Card };
