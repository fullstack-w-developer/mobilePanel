import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PriceList from "../elements/trade/PriceList";
import TradeChart from "../elements/trade/TradeChart";
import SpotTabs from "../elements/trade/SpotTabs";
import TradeFooter from "../elements/trade/TradeFooter";
import CoinPriceTabs from "../elements/trade/CoinPriceTabs";
import { FiMenu } from "react-icons/fi";
import {
  AiOutlineArrowsAlt,
  AiOutlineStar,
} from "react-icons/ai";
import SidebarTrades from "../elements/trade/SidebarTrades";
import { useNavigate } from "react-router";
export default function Trade() {
  const [select, setSelect] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [pageheight, setPageHeight] = useState("");
  const [rowheight, setRowHeight] = useState("");
  const [row2height, setRow2Height] = useState("");
  const [row3height, setRow3Height] = useState("");
  const [row4height, setRow4Height] = useState("");

  const navigate = useNavigate()

  const getHeightofScreen = () => {
    let size = window.innerHeight;
    setPageHeight(size - 55);
    setRowHeight(size - size / 2.8);
    setRow2Height(size - (size / 2 + 20));
    setRow3Height(size - (rowheight + 80));
    setRow4Height(size - rowheight);
  };
  useEffect(() => {
    getHeightofScreen();
    window.addEventListener(
      "resize",
      getHeightofScreen,
      false
    );
  }, [pageheight, rowheight]);

  const tabTrade = [
    {
      id: 1,
      name: "Spot",
    },
    {
      id: 2,
      name: "ETF",
    },
    {
      id: 3,
      name: "Margin",
    },
    {
      id: 4,
      name: "Buy Crypto",
    },
  ];

  const clickSelectTab = (index) => {
    if (select === index) return;
    setSelect(index);
  };
  return (
    <div
      className="container-fluid"
      style={{ height: pageheight }}
    >
      <div className="container_tab_trade d-none d-md-none">
        {tabTrade.map((tab, index) => (
          <button
            onClick={() => clickSelectTab(index)}
            className={`${
              select === index ? "active" : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="container_trade_meniu_bootom d-md-none">
        <div className="container_menu_trade">
          <FiMenu onClick={()=>setOpenSidebar(true)} size={30} />
          <h5 className="">BTC3/USDT</h5>
          <p className="bg-success">+3.47%</p>
        </div>
        <div className="d-flex">
          <AiOutlineArrowsAlt onClick={()=>navigate("/trade/chart")} size={25} />
          <AiOutlineStar size={25} />
        </div>
      </div>
      <div className="row ">
        <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7 col-12 p-0   ">
          <div className="w-100 border-right">
            <TradeChart sizing={rowheight} />
          </div>
          <div className="bordertop">
            <TradeFooter height={230} />
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5 col-12 row teeeeeet gx-0  d-none d-md-flex">
          <div
            className="col-lg-6 col-md-6 col-12 gx-0  overflow-hidden pricing borderbottom"
            style={{ height: rowheight }}
          >
            <PriceList />
          </div>
          <div
            className="col-lg-6 col-md-6 col-12 gx-0 pricing borderbottom borderingl "
            style={{ height: rowheight }}
          >
            <div className="d-flex justify-content-center">
              <Typography variant="p" component="div">
                Trade History
              </Typography>
            </div>
            <div>
              <CoinPriceTabs heights={rowheight} />
            </div>
          </div>
          <div
            className="col-12 "
            style={{ height: row4height }}
          >
            <SpotTabs />
          </div>
        </div>
      </div>
      <SidebarTrades setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>
    </div>
  );
}
