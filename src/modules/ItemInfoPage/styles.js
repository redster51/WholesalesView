import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    itemInfoContent: {
        minHeight: 'calc(100vh - 303px)',
        width: '1220px',
        margin: '0 auto',
        marginTop: '80px',
        paddingTop: '40px',
        display: 'flex',
    },
    root: {
      flexGrow: '1',
    },
    paper: {
      padding: '1.5rem',
      textAlign: 'center',
      margin: '2rem 3rem 2rem 3rem',
      borderRadius: '1rem'
    },
    gridMargin:{
      paddingRight: '3rem',
      paddingLeft: '3rem',
    },
    cardMedia: {
        // paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
        width: '695px',
        height: '460px',
      },
      cardContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '2.5rem',
        padding: 0,
        width: '485px',
        height: '460px',
      },
      cardTypeContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      typoCategory: {
        fontSize: '.875rem',
        fontWeight: 600,
        lineHeight: 1.5,
        color: '#088366',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      },
      typoTitle: {
        marginTop: '.25rem',
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      typoDescription: {
        fontSize:' 1.25rem',
        lineHeight: '1.5',
        color: '#2a2a2a',
        marginTop: '.25rem',
        marginBottom: '.25rem',
      },
      categoryLink: {
        letterSpacing: '1px',
        color: '#6a6a6a',
        fontSize: '1.2rem',
        lineHeight: '1.5',
      },
      raisedContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '.75rem',
        marginBottom: '.3rem !important',
        fontWeight: 700,
        fontSize: '1.25rem',
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
      },
      daysLeftText: {
        marginLeft: '.25rem',
        fontSize: '.75rem', 
      },
      timeButtonRoot: {
        padding: 0,
      },
      cardActions:  {
        padding: 0,
      },
      cardMargingRight: {
        marginRight: '.4rem',
      },
      cardPriceLabel:{
        fontSize: '1.5rem',
        fontWeight: '500',
      },
      progressBarShape: {
        height: '6px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '8px'
      },
      cardItemOptions: {
        marginTop: '2rem',
        marginBottom: '1rem',
        paddingBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      displayInfo:{
        paddingTop: '1rem',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      },
      activeButton:{
        display: 'flex',
        borderBottom: '0.1rem solid black',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        padding: '0 0 0 0',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
      standardButton: {
        display: 'flex',
        padding: '0 0 0 0',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
      imageContainer: {
        display:'flow-root',
        marginLeft: '14rem',
        marginRight: '10rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      },
      imageMenuNumber: {
        paddingBottom: '1.2rem',
        color: '#6a6a6a',
        marginLeft: '.5rem'
      }

}));
