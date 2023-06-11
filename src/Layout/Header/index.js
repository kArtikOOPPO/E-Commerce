import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThreePIcon from "@mui/icons-material/ThreeP";

import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "./storeState";
import { SideBar } from "../SideBar/index";

const navItems = ["My Account", "Became a Seller", "More", "Cart"];
const navIcons = [<ShoppingCartIcon />, <ThreePIcon />];

export default function DrawerAppBar(props) {
  const dispatch = useDispatch();
  const drawerState = useSelector(({ header }) => header?.drawer);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "black", position: "sticky", top: 0 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => dispatch(setDrawer())}
            sx={{
              mr: 2,
              display: { sm: "none" },
              mr: {
                xs: 1,
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",

              fontSize: {
                xs: "1.1rem",
              },
            }}
          >
            My Mom & Dad
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", textTransform: "none" }}>
                {item === "Cart" ? (
                  <>
                    <ShoppingCartIcon sx={{ fontSize: "18px", mr: 1 }} />
                    {item}
                  </>
                ) : (
                  item
                )}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            {navIcons.map((item, i) => (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{
                  m: 0.5,
                  display: { sm: "none" },
                }}
                key={i}
              >
                {item}
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <SideBar navList={navItems} />
    </Box>
  );
}
