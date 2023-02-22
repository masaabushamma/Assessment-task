import { makeStyles } from '@mui/styles';
import colors from '../../styles/colors.module.scss';

export const useStyles = makeStyles({
  root: (props:{coverColor?:string}) => ({
    width: '545px',
    [`& .popupCoverImage`]: {
      width: '100%',
      height: 158,
      backgroundColor: props.coverColor?props.coverColor:colors.Grey,
    },
    [`& .popUpDetails`]: {
      position: 'relative',
      bottom: '50px',
      textAlign: 'center',
    },
    [`& .MuiAvatar-root`]: {
      width: 120,
      height: 120,
      position: 'relative',
      left: '38%',
    },
    [`& h4`]: {
      marginBottom: '0px',
      marginTop: '10px',
      fontSize: '18px',
      fontWeight: '700',
    },
    [`& p`]: {
      fontWeight: '400',
      fontSize: '14px',
      color: colors.Grey2,
      marginTop: '7px',
    },
  }),
});
