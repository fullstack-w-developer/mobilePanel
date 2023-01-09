import {
  Button,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { ReactComponent as binance } from "../../../assets/icons/binance.svg";
import { ReactComponent as bitcoin } from "../../../assets/icons/bitcoin.svg";
import { ReactComponent as eth } from "../../../assets/icons/eth.svg";
import Svgs from "../global/Svgs";

const trs = {
  "& td,& th": { border: 0, px: 1, color: "grey" },
};
const trs2 = {
  "& td,& th": { border: 0, px: 1, fontSize: 16 },
  "&:hover": {
    backgroundColor: "rgb(43, 49, 57)",
  },
};
const headstyle = {
  minWidth: "120px",
  maxWidth: "150px",
};
const colorgray = {
  color: "rgb(132, 142, 156)",
};
function createData(
  name,
  nick,
  lastprice,
  changes,
  market,
  icon
) {
  return { name, nick, lastprice, changes, market, icon };
}

const rows = [
  createData(
    "BNB",
    "BNB",
    "$284.3",
    "+3.37%",
    "$45.868M",
    binance
  ),
  createData(
    "Bitcoin",
    "BTC",
    "$19.990",
    "-0.73%",
    "$383.243M",
    bitcoin
  ),
  createData(
    "Ethereum",
    "ETH",
    "$1.354",
    "-0.38%",
    "$166.163M",
    eth
  ),
  createData(
    "Tether",
    "USDT",
    "$1.354",
    "-0.38%",
    "$166.163M",
    eth
  ),
  createData(
    "Tron",
    "TRX",
    "$1.354",
    "-0.38%",
    "$166.163M",
    eth
  ),
  createData(
    "LiteCoin",
    "LTC",
    "$1.354",
    "-0.38%",
    "$166.163M",
    eth
  ),
];

const getColor = (numberText) => {
  if (numberText.includes("+")) {
    return "#05c48e";
  } else {
    return "#df473d";
  }
};
export default function CurrencyList() {
  return (
    <Box sx={{ py: 5, px: 0 }} className="landlist-m ">
      <div className="d-lg-block d-md-block d-none">
        <Box
          className=" d-flex justify-content-between "
          sx={{ mb: 4 }}
        >
          <Typography
            sx={{ fontSize: "40px", fontWeight: "600" }}
            className="head-style"
          >
            Popular cryptocurrencies
          </Typography>
          <Button color="inherit" className="head-style">
            view more markets &#62;
          </Button>
        </Box>
      </div>
      <div className="d-lg-none d-md-none d-block">
        <Box className="text-start d-flex align-items-center ">
          <Typography
            variant="h5"
            className="head-style mb-4"
          >
            Popular cryptocurrencies
          </Typography>
          <Button color="inherit" className="head-style">
            view more markets &#62;
          </Button>
        </Box>
      </div>

      <Box
        sx={{ display: { xs: "none", sm: "block" } }}
        className="row"
      >
        <TableContainer className="overflow-auto">
          <Table>
            <TableHead>
              <TableRow sx={trs}>
                <TableCell
                  className="text-start head-style px-2"
                  style={colorgray}
                >
                  name
                </TableCell>
                <TableCell
                  className="text-center head-style"
                  style={colorgray}
                >
                  Last Price
                </TableCell>
                <TableCell
                  className="text-center head-style"
                  style={colorgray}
                >
                  24h Changes
                </TableCell>
                <TableCell
                  className="text-end head-style px-1"
                  style={colorgray}
                >
                  Market Cup
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((item, idx) => (
                <TableRow key={idx} sx={trs2}>
                  <TableCell
                    className="text-start"
                    sx={{
                      borderRadius: "10px 0px 0px 10px",
                    }}
                  >
                    <Svgs
                      Component={item.icon}
                      style={{
                        height: "30px",
                        width: "30px",
                        marginRight: "10px",
                      }}
                    />
                    {item.name}{" "}
                    <span
                      style={{
                        color: "grey",
                        marginLeft: "1%",
                        fontSize: "13px",
                      }}
                    >
                      {item.nick}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    {item.lastprice}
                  </TableCell>
                  <TableCell
                    className="text-center"
                    sx={{ color: getColor(item.changes) }}
                  >
                    {item.changes}
                  </TableCell>
                  <TableCell
                    className="text-end "
                    sx={{
                      borderRadius: "0px 10px 10px 0px",
                    }}
                  >
                    {item.market}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* table for mobile */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        {/* header */}
        <div
          className="d-flex justify-content-between"
          style={{ color: "gray" }}
        >
          <p>name</p>
          <div className="d-flex gap-4">
            <p>last price</p>
            <p>change</p>
          </div>
        </div>
        {/* body */}

        {/* map data in div */}
        {[0, 1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between border-bottom pb-1"
          >
            <div className="d-flex ">
              <Svgs
                Component={binance}
                style={{
                  height: "30px",
                  width: "30px",
                  marginRight: "10px",
                }}
              />

              <h5 style={{ fontSize: "18px" }}>
                BTC{" "}
                <span
                  style={{
                    color: "grey",
                    marginLeft: "4px",
                    fontSize: "13px",
                  }}
                >
                  BTC
                </span>
              </h5>
            </div>

            <div className="d-flex align-items-center  gap-4">
              <div>
                <p className="m-0">$284.3</p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "gray",
                  }}
                >
                  $123.3
                </p>
              </div>

              <p className="text-danger">+3.37%</p>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
}
