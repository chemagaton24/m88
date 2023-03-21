import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyle from "../Styled/GlobalStyles";
import Header from "./Header";

const index = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
};

export default index;
