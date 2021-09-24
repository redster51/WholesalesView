import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default withStyles((theme) => ({
  root: {
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    backgroundColor: theme.palette.warning.main,
    fontSize: theme.typography.pxToRem(14),
    boxShadow: 'none',
    '&:active, &:focus, &:hover': {
      boxShadow: 'none',
      backgroundColor: theme.palette.warning.dark,
    },
    borderRadius: '4px',
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(20),
  },
}))(Button);