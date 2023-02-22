import { Box } from '@mui/material';

import SideBarMenu from './components/SideBarMenu';
import { MenuItems } from './MenuItems';

import { useStyles } from './style';
import "./assets/fonts/Mulish-VariableFont_wght.ttf"
import colors from './styles/colors.module.scss';

function App() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <SideBarMenu MenuItems={MenuItems} MenuBackgroundColor={colors.NavyBlue}/>
      </Box>
    </div>
  );
}

export default App;