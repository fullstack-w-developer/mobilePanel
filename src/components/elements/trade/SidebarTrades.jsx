import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
const btnItems = [
  {
    id: 1,
    name: "BTN",
  },
  {
    id: 2,
    name: "USDT",
  },
  {
    id: 3,
    name: "ETH",
  },
];
const SidebarTrades = ({ openSidebar, setOpenSidebar }) => {
  const [select, setSelect] = useState(0);
  const onClose = () => setOpenSidebar(false);
  return (
    <Drawer
      onClose={onClose}
      PaperProps={{ sx: { minWidth: "300px" } }}
      anchor="left"
      open={openSidebar}
    >
      <div
        style={{ background: "#21202a", height: "100%" }}
      >
        <div className="container_search_sidebar_trade">
          <input />
          <BsSearch size={20} />
        </div>
        <div className="container_button_sidebar_trade">
          {btnItems.map((btn, index) => (
            <button
              onClick={() => setSelect(index)}
              className={`${
                select === index ? "active" : ""
              }`}
              key={btn.id}
            >
              {btn.name}
            </button>
          ))}
        </div>
        {Array.from({ length: 10 }).map((i) => (
          <div
            style={{
              borderBottom: "1px solid gray",
              fontFamily: "Harmony",
            }}
            className="d-flex pb-2 justify-content-between px-2 align-items-center mt-4"
          >
            <div className="d-flex align-items-center">
              <h5
                style={{ fontSize: "15px" }}
                className="m-0 p-0"
              >
                ADA
              </h5>
              <p
                style={{ fontSize: "13px" }}
                className="m-0 p-0 text-secondary"
              >
                /BTC
              </p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h5
                style={{ fontSize: "15px" }}
                className="m-0 p-0"
              >
                0.00000001879
              </h5>
              <p
                style={{ fontSize: "13px" }}
                className="m-0 p-0 text-success"
              >
                +10.56%
              </p>
            </div>
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default SidebarTrades;
