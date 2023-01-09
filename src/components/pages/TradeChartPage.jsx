import React, { useEffect, useState } from "react";
import TradingViewWidget, {
  Themes,
  BarStyles,
} from "react-tradingview-widget";
import "chart.js/auto";
import PriceList from "../elements/trade/PriceList";
import { MdArrowBackIos } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Typography } from "@mui/material";
import SpotTabs from "../elements/trade/SpotTabs";
import CoinPriceTabs from "../elements/trade/CoinPriceTabs";

const TradeChartPage = ({ sizing }) => {
  const [rowheight, setRowHeight] = useState("");
  const [row2height, setRow2Height] = useState("");
  const [row3height, setRow3Height] = useState("");
  const [row4height, setRow4Height] = useState("");
  const navigate = useNavigate();

  const getHeightofScreen = () => {
    let size = window.innerHeight;
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
  }, [rowheight]);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-3">
        <MdArrowBackIos
          onClick={() => navigate("/trade")}
          size={21}
        />
        <h5 className="m-0 p-0">BTC/USDT</h5>
        <AiOutlineStar size={21} />
      </div>

      <div className="d-flex justify-content-between align-items-center p-2">
        <div>
          <h2 className="text-success">17,237.18</h2>
          <span>+1.40%</span>
        </div>
        <div>
          <p
            style={{ fontSize: "12px" }}
            className="d-flex flex-column align-items-center p-0 m-0"
          >
            <span className="text-secondary">24H High</span>
            <span>17,263,66</span>
          </p>
          <p
            style={{ fontSize: "12px" }}
            className="d-flex flex-column pt-2 align-items-center p-0 m-0"
          >
            <span className="text-secondary">24H Low</span>
            <span>17,263,66</span>
          </p>
        </div>
        <div>
          <p
            style={{ fontSize: "12px" }}
            className="d-flex flex-column align-items-center p-0 m-0"
          >
            <span className="text-secondary">24H Vol</span>
            <span>25.28K</span>
          </p>
          <p
            style={{ fontSize: "12px" }}
            className="d-flex flex-column  pt-2 align-items-center p-0 m-0"
          >
            <span className="text-secondary">24H Vol</span>
            <span>431.34M</span>
          </p>
        </div>
      </div>
      <TradingViewWidget
        symbol="BTCUSDT"
        theme={Themes.DARK}
        locale="fa_IR"
        height={500}
        width="auto"
        // BarStyles="BARS"
        // style={{height:"500px"}}
      />
      <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5 col-12 row teeeeeet gx-0   ">
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

      <div className="container_btn_trade_chart">
        <div>
          <span>ETF</span>
        </div>
        <div>
          <span>Spot</span>
        </div>
        <div>
          <span>Futures</span>
        </div>
        <div>
          <button>Buy</button>
          <button>Sell</button>
        </div>
      </div>
    </div>
  );
};

export default TradeChartPage;
