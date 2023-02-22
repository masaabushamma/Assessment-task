import { makeStyles } from '@mui/styles';
import colors from '../../styles/colors.module.scss';

export const useStyles = makeStyles({
  root: (props: { MenuBackgroundColor: string }) => ({
    width: 255,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: 255,
      boxSizing: 'border-box',
      backgroundColor: props.MenuBackgroundColor,
      [`& .MuiToolbar-regular`]: {
        justifyContent: 'center',
        marginTop: '15px',
      },
      [`& .MuiBox-root`]: {
        overflow: 'auto',
        color: colors.Grey,
        marginTop: '30px',
        '& .MuiListItem-root': {
          '& .Mui-selected': {
            backgroundColor: colors.LightNavyBlue,
            color: colors.LightBlue,
            borderLeft: `2px solid ${colors.LightBlue}`,
          },

          [`& .MuiListItemIcon-root`]: {
            justifyContent: 'center',
          },
          [`& .MuiListItemText-root`]: {
            fontSize: '16px',
            lineHeight: '20px',
          },
        },
      },
    },
  }),
});
