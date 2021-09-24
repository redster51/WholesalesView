import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    cardContainer: {
      display: 'flex',
      textDecoration: 'none',
      marginLeft: '1.4rem',
      marginRight: '1.4rem',

      '&:hover': {
        boxShadow: '0 2px 6px -4px rgb(0 0 0 / 20%), 0 8px 10px -4px rgb(0 0 0 / 14%), 0 8px 12px 4px rgb(0 0 0 / 5%)',
        transform: 'translateY(-2px)',
        zIndex: '10',
        cursor: 'pointer',
      }
    },
    cardShadowContainer : {
      display: 'flex',
      textDecoration: 'none',
      marginLeft: '1.4rem',
      marginRight: '1.4rem',
      boxShadow: '0 -3px 10px 10px rgb(0 0 0 / 34%), 0 16px 10px -4px rgb(0 0 0 / 14%), 0 8px 12px 4px rgb(0 0 0 / 5%);',

      '&:hover': {  
        transform: 'translateY(-2px)',
        zIndex: '10',
        cursor: 'pointer',
      }
    },
    card: {
      height: '590px',
      display: 'flex',
      flexDirection: 'column',
      width: '300px',

    },
    cardMedia: {
      backgroundSize: 'contain',
      paddingTop: '56.25%', // 16:9
      height: '278px',
    },
    cardContent: {
      flexGrow: 1,
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'column',
      height: '17rem',
    },
    cardTypeContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    typoCategory: {
      fontSize: '.75rem',
      color: '#088366',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    typoTitle: {
      marginTop: '.25rem',
      fontSize: '1rem',
    },
    typoDescription: {
      fontSize:' .75rem',
      lineHeight: '1.5',
      color: '#6a6a6a',
      marginTop: '.25rem',
      marginBottom: '.25rem',
    },
    categoryLink: {
      letterSpacing: '1px',
      color: '#6a6a6a',
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    raisedContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '.75rem',
      marginBottom: '.4rem',
    },
    iconButtonRoot: {
      padding: 0,
    },
    progressBarColorPrimary: {
      backgroundColor: '#ddd',
    },
    progressBarColor: {
      backgroundColor: '#34ca96',
    },
    timeLeftContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '.5rem',
      color: '#6a6a6a',
      justifyContent:'space-between'
    },
    daysLeftText: {
      marginLeft: '.25rem',
      fontSize: '.75rem', 
    },
    timeButtonRoot: {
      padding: 0,
    },
    cardPriceLabel:{
      fontSize: '1rem',
      fontWeight: '500',
    }
  }));
