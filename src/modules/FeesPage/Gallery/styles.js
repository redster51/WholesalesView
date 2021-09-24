import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(8),
      maxWidth: '98%',
      justifyContent: 'center'
    },
    itemInfoContent: {
      minHeight: 'auto',
      width: '80%',
      margin: '0 auto',
      paddingTop: '40px',
      display: 'flex',
    },
  }));