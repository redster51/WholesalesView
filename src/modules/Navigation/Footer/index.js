import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Wholesales.by
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
    marginTop: 40,
  },
  footerProfile: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
}));

export default function StickyFooter({ isProfile }) {
  const classes = useStyles();

  return (
    <footer className={isProfile ? classes.footerProfile : classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        About those guys
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  );
}