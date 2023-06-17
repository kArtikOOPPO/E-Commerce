import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ThreePIcon from "@mui/icons-material/ThreeP";
import Autocomplete from "@mui/material/Autocomplete";

import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "./storeState";
import { SideBar } from "../SideBar/index";

const navItems = ["My Account", "Became a Seller", "More", "Cart"];
const navIcons = [<ShoppingCartIcon />, <ThreePIcon />];

export default function DrawerAppBar(props) {
  const dispatch = useDispatch();
  const drawerState = useSelector(({ header }) => header?.drawer);

  return (
    <Box sx={{ display: "flex", position: "sticky", top: 0,height: '100px',zIndex: 2 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#537188" }}>
        <Toolbar sx={{ flexWrap: { xs: "wrap", sm: "nowrap" } }}>
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
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            size="small"
            sx={{
              backgroundColor: "white",
              minWidth: { sm: 150, md: 300, lg: 400 },
              mx: { sm: 2, md: 6 },
              borderRadius: "5px",
              display: { xs: "none", sm: "block", md: "block" },
            }}
            options={navItems.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="Search input"
                placeholder="Search"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      <SearchIcon sx={{ color: "#537188", ml: 1 }} />
                      {params.InputProps.startAdornment}
                    </>
                  ),
                  type: "search",
                }}
              />
            )}
          />

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
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            size="small"
            sx={{
              backgroundColor: "white",
              my: "5px",
              borderRadius: "5px",
              width: "100%",
              display: { xs: "block", sm: "none" },
            }}
            options={navItems.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="Search input"
                placeholder="Search"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      <SearchIcon sx={{ color: "#537188", ml: 1 }} />
                      {params.InputProps.startAdornment}
                    </>
                  ),
                  type: "search",
                }}
              />
            )}
          />
        </Toolbar>
      </AppBar>

      <SideBar navList={navItems} />
    </Box>
  );
}
