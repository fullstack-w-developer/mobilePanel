import { height } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import TradingViewWidget, {
  Themes,
  BarStyles,
} from "react-tradingview-widget";
import "chart.js/auto";
import TradeMobile from "./TradeMobile";

export default function TradeChart({ sizing }) {
  return (
    <>
    <div className="pr-2 d-none d-md-block ">
      <TradingViewWidget
        
        symbol="BTCUSDT"
        theme={Themes.DARK}
        locale="fa_IR"
        height={`${sizing}`}
        width="auto"
        // BarStyles="BARS"
        // style={{height:"500px"}}
      />

    </div>
    <TradeMobile/>
    </>
  );
}
