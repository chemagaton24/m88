import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../Styled/GlobalStyles";
import Announcement from "./Announcement";
import Header from "./Header";

const index = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Announcement />
      <Outlet />
    </>
  );
};

export default index;
