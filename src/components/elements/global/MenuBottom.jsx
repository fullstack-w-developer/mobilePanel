import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import NoteIcon from "@mui/icons-material/Note";
import WalletIcon from "@mui/icons-material/Wallet";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
const MenuBottom = () => {
  const location = useLocation();
  if (location.pathname === "/trade/chart") return null;
  return (
    <div
      style={{ backgroundColor: "#282736" }}
      className="position-fixed bottom-0 w-100 py-2 d-md-none d-flex align-items-center justify-content-between px-3"
    >
      <Link
        className="d-flex flex-column align-items-center"
        to="/"
      >
        <HomeIcon />
        <span style={{ fontSize: "10px" }}>Home</span>
      </Link>
      <Link
        className="d-flex flex-column align-items-center"
        to="#"
      >
        <ElectricBoltIcon />
        <span style={{ fontSize: "10px" }}>Markets</span>
      </Link>
      <Link
        className="d-flex flex-column align-items-center"
        to="/trade"
      >
        <ForkRightIcon />
        <span style={{ fontSize: "10px" }}>Trade</span>
      </Link>

      <Link
        to="#"
        className="d-flex flex-column align-items-center"
      >
        <WalletIcon />
        <span style={{ fontSize: "10px" }}>WalletIcon</span>
      </Link>
    </div>
  );
};

export default MenuBottom;
