import { NavLink } from "react-router-dom";
import LogoM88 from "../../../assets/images/logos/m88.svg";

const Logo = () => {
  return (
    <NavLink to="/">
      <img src={LogoM88} alt="m88 logo" />
    </NavLink>
  );
};

export default Logo;
