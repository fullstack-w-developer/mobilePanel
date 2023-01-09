import {
  Apps,
  DarkMode,
  KeyboardArrowDown,
  LightMode,
  Menu as MenuIcon,
  Language,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  ListItemText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import BTCUSDT from "./BTCUSDT";
import MenuItemsComponents from "./MenuItemsComponents";
import {
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DarkLogo from "../../../assets/logodark.png";
import LightLogo from "../../../assets/logolight.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import LoginIcon from "@mui/icons-material/Login";
import SideMenu from "./SideMenu";
const menui = [
  { name: "ByCrypto" },
  { name: "Market" },
  { name: "Trade" },
];
const tradeitem = [{ name: "Spot" }, { name: "Margin" }];
export default function Navbar({ open }) {
  const [sideMenu, setSideMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  // const [anchorEl3, setAnchorEl3] = useState(null);

  const [items, setitems] = useState([]);
  const openm = Boolean(anchorEl);
  const openbtc = Boolean(anchorEl2);
  // const opendasboard = Boolean(anchorE3);
  let location = useLocation();
  let navigate = useNavigate();
  const handleClick = (data) => (event) => {
    setAnchorEl(event.currentTarget);
    setitems(data);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickBtc = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseBtc = () => {
    setAnchorEl2(null);
  };

  const orders = [{ name: "Spot Order" }];
  const wallet = [
    { name: "Asset Overview" },
    { name: "Deposit" },
    { name: "Withdraw" },
  ];
  const csfont = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    marginRight: "4px",
    userSelect: "none",
    whiteSpace: "nowrap",
  };
  if (location.pathname === "/trade/chart") return null;
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <AppBar
          sx={{ height: "60px", backgroundImage: "none" }}
          color="dark"
          position="static"
        >
          <Toolbar sx={{ width: "auto" }}>
            <Box
              sx={{ flexGrow: 1 }}
              className="d-flex align-items-center"
            >
              <Typography
                variant="h5"
                className="logo"
                component={Link}
                to="/"
                sx={{
                  mr: 4,
                  cursor: "pointer",
                  textDecoration: "none",
                  boxShadow: "none",
                  backgroundImage: "none",
                }}
              >
                <img
                  src={LightLogo}
                  alt="light-logo"
                  width={130}
                />
              </Typography>

              {location.pathname === "/trade" ? (
                <Box className="d-lg-block d-md-block d-none">
                  <Button
                    color="inherit"
                    className="btcusdt"
                    sx={{ fontSize: "15px" }}
                    style={csfont}
                    onClick={handleClickBtc}
                  >
                    BTC/USDT
                    <ArrowDropDownIcon />
                  </Button>
                </Box>
              ) : (
                <Box className="d-lg-block d-md-block d-none">
                  <Link
                    className="logo"
                    to="/"
                    style={{ marginRight: "15px" }}
                  >
                    BuyCrypto
                  </Link>
                  <Link className="logo" to="/trade">
                    Trade
                  </Link>
                </Box>
              )}

              {location.pathname === "/trade" && (
                <Box className="d-lg-block d-md-none d-none pt-2">
                  <div className="d-flex pb-1">
                    <ListItemText
                      className="mx-4"
                      primary={
                        <Typography
                          variant="P"
                          color="error"
                          fontSize={15}
                        >
                          20,637.99
                        </Typography>
                      }
                      secondary={
                        <Typography fontSize={11}>
                          $20,637.99
                        </Typography>
                      }
                    />
                    <ListItemText
                      primary={
                        <Typography
                          sx={{ color: "#8c8e90" }}
                          variant="p"
                          fontSize={13}
                        >
                          24h changes
                        </Typography>
                      }
                      secondary={
                        <Typography
                          color="error"
                          fontSize={11}
                        >
                          -86.10 -0.42%
                        </Typography>
                      }
                    />

                    <ListItemText
                      className="mx-4"
                      primary={
                        <Typography
                          sx={{ color: "#8c8e90" }}
                          variant="p"
                          fontSize={13}
                        >
                          24h High
                        </Typography>
                      }
                      secondary="20,822.00"
                      secondaryTypographyProps={{
                        fontSize: "11px",
                        color: "#fff",
                      }}
                    />
                    <ListItemText
                      primary={
                        <Typography
                          sx={{ color: "#8c8e90" }}
                          variant="p"
                          fontSize={13}
                        >
                          24h Low
                        </Typography>
                      }
                      secondary="20,237.95"
                      secondaryTypographyProps={{
                        fontSize: "11px",
                        color: "#fff",
                      }}
                    />

                    <ListItemText
                      className="mx-4"
                      primary={
                        <Typography
                          sx={{ color: "#8c8e90" }}
                          variant="p"
                          fontSize={11}
                        >
                          24h Volume(BTC)
                        </Typography>
                      }
                      secondary="314,570.58"
                      secondaryTypographyProps={{
                        fontSize: "11px",
                        color: "#fff",
                      }}
                    />
                    <ListItemText
                      primary={
                        <Typography
                          sx={{ color: "#8c8e90" }}
                          variant="p"
                          fontSize={11}
                        >
                          24h Volume(USDT)
                        </Typography>
                      }
                      secondaryTypographyProps={{
                        fontSize: "11px",
                        color: "#fff",
                      }}
                      secondary="6,451,473,834.19"
                    />
                  </div>
                </Box>
              )}
            </Box>

            <Box className="d-flex justify-content-between d-lg-block d-md-block d-none ">
              {location.pathname != "/trade" && (
                <Link
                  className="logo"
                  style={{ marginRight: "15px" }}
                  onClick={handleClick(wallet)}
                >
                  Wallet <ArrowDropDownIcon />
                </Link>
              )}
              {location.pathname != "/trade" && (
                <Link
                  className="logo"
                  style={{ marginRight: "15px" }}
                  onClick={handleClick(orders)}
                  to="orders"
                >
                  Orders <ArrowDropDownIcon />
                </Link>
              )}
              <Link className="logo" to="/login">
                log in
              </Link>
              <Button
                variant="contained"
                color="light"
                className="spacial"
                component={Link}
                to="/signup"
                sx={{
                  mx: "15px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                sign up
              </Button>
            </Box>
            <IconButton>
              <DarkMode sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <Language sx={{ color: "white" }} />
            </IconButton>
            <Box className="d-lg-none d-md-none d-block ">
              <IconButton color="inherit" onClick={open}>
                <MenuIcon />
              </IconButton>
            </Box>
            <MenuItemsComponents
              open={openm}
              anchorEl={anchorEl}
              handleClose={handleClose}
              items={items}
            />
            <BTCUSDT
              open={openbtc}
              anchorEl={anchorEl2}
              handleClose={handleCloseBtc}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <header
        style={{ backgroundColor: "#121212" }}
        className="d-flex gap-5 d-md-none justify-content-between align-items-center p-2 px-2 "
      >
        <div className="d-flex align-items-center gap-2"  style={{flex:1}}>
          <AccountCircleIcon
            onClick={() => setSideMenu(!sideMenu)}
            sx={{ width: 40, height: 40, color: "#444444" }}
          />
          <div
            style={{ backgroundColor: "#444444",flex:1 }}
            className="d-flex p-1  align-items-center rounded-4"
          >
            <SearchIcon
              sx={{
                width: 25,
                height: 25,
                color: "#333333",
              }}
            />
            <input
              style={{ outline: "none" }}
              className="bg-transparent border-0"
              placeholder="Search token/futures"
            />
          </div>
        </div>

        <div className="d-flex gap-2">
          <CloudDownloadIcon
            onClick={() => navigate("/login")}
          />
          <LoginIcon onClick={() => navigate("/login")} />
        </div>
      </header>
      <SideMenu
        open={sideMenu}
        close={() => setSideMenu(!sideMenu)}
      />
    </>
  );
}
