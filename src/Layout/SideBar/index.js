import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Box,
  ListItemText,
  Typography,
} from "@mui/material";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import SwitchAccountSharpIcon from "@mui/icons-material/SwitchAccountSharp";
import SupervisedUserCircleSharpIcon from "@mui/icons-material/SupervisedUserCircleSharp";
import DisplaySettingsSharpIcon from "@mui/icons-material/DisplaySettingsSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../Header/storeState";

const drawerWidth = 240;

export const SideBar = ({ navList }) => {
  const dispatch = useDispatch();
  const drawerState = useSelector(({ header }) => header?.drawer);

 const IconWithTitle = {
   MyAccount: <SwitchAccountSharpIcon sx={{ mr: 1 }} color="blue" />,
   BecameaSeller: <SupervisedUserCircleSharpIcon sx={{ mr: 1 }} color="blue" />,
   More: <DisplaySettingsSharpIcon sx={{ mr: 1 }} color="blue" />,
   Cart: <ShoppingCartIcon sx={{ mr: 1 }} color="blue" />,
 };
 const IconDisplay = ({item})=>{
   return IconWithTitle[item.replace(/\s/g, "")];
 }

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={drawerState}
        onClose={() => dispatch(setDrawer())}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box onClick={() => dispatch(setDrawer())} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
            }}
          >
            <PersonSharpIcon sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ my: 2 }}>
              Welcome
            </Typography>
          </Box>

          <Divider />
          <List>
            {navList.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "left" }}>
                  <IconDisplay item={item} />
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
