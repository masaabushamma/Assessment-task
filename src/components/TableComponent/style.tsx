import { makeStyles } from "@mui/styles";
import colors from '../../styles/colors.module.scss';

export const useStyles = makeStyles({
  AvatarTableCell: {
    display: "flex !important",
    [`& .MuiAvatar-root`]: {
      marginTop: "2px",
    },
    [`& .text-container`]: {
      paddingLeft: "24px",
    },
    [`& p`]: {
      marginBottom: "0",
    },
  },


  text1: {
    fontWeight: "600",
    fontSize: "14px",
    margin: "0",
  },
  text2: {
    color: colors.medGrey,
    fontSize: "12px",
    fontWeight: "400",
    margin: "0",
    paddingTop:'4px'
  },
  headRow:{
    height:'50px !important'
  },
  tablePagination: {
    marginTop:'10px',
    marginRight:'30px',
    position:'absolute',
    right:'0',
    '& .MuiInputBase-root':{
        width:'50px',
        margin:'0'
    },
    '& .MuiTablePagination-selectLabel':{
      color:colors.Grey,
      fontWeight:'400',
      fontFamily:'Mulish'
    },
    '& .MuiTablePagination-actions':{
        marginLeft:'0 !important',
        color:colors.Grey
    }
  },
  footerRow:{
    position:'relative',
    height:'77px !important',
    '& .MuiTableCell-root':{
    borderBottom:'0',
    }
  }
});
