import React, { useState } from "react";
import Navbar from "../elements/global/Navbar";
import SideMenu from "../elements/global/SideMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  EffectFlip,
  Navigation,
  Autoplay,
} from "swiper";
import landing from "../../assets/slide1.jpg";
import space2 from "../../assets/slide2.jpg";
import space3 from "../../assets/slide3.jpg";
import space4 from "../../assets/slide4.jpg";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Box } from "@mui/material";
import MenuBottom from "../elements/global/MenuBottom";
SwiperCore.use([
  Pagination,
  Navigation,
  EffectFlip,
  Autoplay,
]);

export default function PrivateRoute({ children }) {
  const [open, setOpen] = useState(false);
  const handle = (props) => (event) => {
    setOpen(props);
    console.log(props);
  };
  return (
    <div style={{ height: "100vh" }}>
      <Navbar open={handle(true)} />
 
      <div>
        {children}
        <SideMenu open={open} close={handle(false)} />
        <MenuBottom/>
      </div>
    </div>
  );
}
