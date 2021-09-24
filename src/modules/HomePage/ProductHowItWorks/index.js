import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Delivery from '../../../logo/icons8-heavy-100.png';
import Bag from '../../../logo/icons8-money-bag-80.png';
import Coins from '../../../logo/icons8-coins-96.png';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary,
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1400px',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(10),
  },
  number: {
    fontSize: 30,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.warning.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 80,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
}));

function ProductHowItWorks() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="https://material-ui.com/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src={Coins}
                  alt="coins"
                  className={classes.image}
                  style={{zIndex: '100'}}
                />
                <Typography variant="h5" align="center">
                  Order the specific fee's product
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src={Bag}
                  alt="bag"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Collect money toogether with other people for specific fee
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src={Delivery}
                  alt="delivery"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Wait for delivery. Delivery will occur immediately after the end of fee
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/fees"
        >
          Get started
        </Button>
      </Container>
    </section>
  );
}

export default ProductHowItWorks;