import { makeStyles } from '@mui/styles';
import colors from '../../styles/colors.module.scss';

export const useStyles = makeStyles({
  root: {
    marginTop: '25px',
    border: `1px solid ${colors.BlueWhite}`,
    borderRadius: '8px',
    backgroundColor: colors.White,
    [`& .MuiToolbar-regular`]: {
      display: 'flex',
      justifyContent: 'space-between',
      padding:'0',
      '& .table-title': {
        paddingLeft: '32px',
        marginTop: '32px',
        fontSize: '19px',
      },
    },
    [`& .MuiTableHead-root`]: {
      [`& .MuiTableCell-root`]: {
        color: colors.Grey,
      },
    },
    ['& .tabelHeaders']: {
      display: 'flex',
      justifyContent: 'space-between'
    },
  },
  TableCell: {
    display: 'flex !important',
    [`& .MuiAvatar-root`]: {
      marginTop: '12px',
    },
    [`& p`]: {
      marginBottom: '0',
    },
  },
});
