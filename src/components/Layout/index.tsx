import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../Styled/GlobalStyles";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Announcement />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
