import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { ReactComponent as Logo } from '../../assets/icons/logo-white-small.svg';

import { itemType } from './type';
import { useStyles } from './styles';

//sideBar Menu with dynamic items
function SideBarMenu({
  MenuItems,
  MenuBackgroundColor,
}: {
  MenuItems: Array<itemType>;
  MenuBackgroundColor: string;
}) {
  const classes = useStyles({ MenuBackgroundColor: MenuBackgroundColor });
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState<number>();

  useEffect(() => {
    MenuItems.map((x, index) => {
      if (x.path === location.pathname) setSelectedItem(index);
    });
  }, [location]);

  return (
    <>
      <Drawer variant="permanent" className={classes.root}>
        <Toolbar>
          <Logo />
        </Toolbar>
        <Box>
          <List>
            {MenuItems.map((item: itemType, index: number) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => {
                  navigate(item.path);
                }}>
                <ListItemButton selected={selectedItem === index}>
                  <ListItemIcon>{item.itemIcon}</ListItemIcon>
                  <ListItemText primary={item.itemName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <>
        <Routes>
          {MenuItems.map((item: itemType, index: number) => (
            <Route path={item.path} element={item.content} key={index}>
              {item.children && (
                <Route
                  path={item.children.path}
                  element={item.children.content}
                />
              )}
            </Route>
          ))}
        </Routes>
      </>
    </>
  );
}

export default SideBarMenu;
