import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import Nav from "../shared/navbar/Nav";
import Footer from "../shared/footer/Footer";

const HomeLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
