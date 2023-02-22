import { makeStyles } from '@mui/styles';
import colors from '../../styles/colors.module.scss';

export const useStyles = makeStyles({
  root: {
    paddingTop: '9px',
    border: `1px solid ${colors.BlueWhite}`,
    backgroundColor: colors.BlueWhite2,
    padding: '24px',
    flexGrow: '1',
    [`& .userView`]: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: '0',
      paddingBottom: '20px',
      '& h2': {
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '30px',
      },
      '& p': {
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
  },
  UserAvatar: {
    display: 'flex',
    fontSize: '14px',
    [`& .MuiAvatar-root`]: {
      marginLeft: '14px',
      borderRadius: '50%',
      border: `2px solid ${colors.BlueWhite}`,
      padding: '2px',
      [`& .MuiAvatar-img`]: {
        borderRadius: '50%',
      },
    },
  },
});
