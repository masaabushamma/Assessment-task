import { adaptV4Theme, createTheme } from "@mui/material/styles";
import colors from "../../styles/colors.module.scss";
const theme = createTheme(
  adaptV4Theme({
    overrides: {
      MuiInputBase: {
        root: {
          width: "197px",
          marginRight: "13px",
        },
      },
      MuiTableRow:{
        root:{
        height:'92px'
        }
      },
      MuiTableCell: {
        root: {
          paddingLeft:'32px',
          fontFamily: "Mulish",
        },
      },
      MuiInputLabel: {
        root: {
          fontSize: "14px",
          display: "inline",
          color: colors.grey,
        },
      },
      MuiToolbar: {
        root: {
          fontFamily: "Mulish",
        },
      },
    },
    props: {
      MuiTextField: {
        variant: "outlined",
      },
    },
  })
);
export default theme;
