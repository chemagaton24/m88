import { NavLink } from "react-router-dom";
import { FlexBox } from "../../Styled/FlexBox";
import { Navbar as NavbarSX } from "./Styled";

const footerMenuList = [
  {
    label: "About M88",
    to: "/about",
  },
  {
    label: "Refer Friend",
    to: "/refer-a-friend",
  },
  {
    label: "VIP",
    to: "/vip",
  },
  {
    label: "Affiliates",
    to: "/affiliates",
  },
  {
    label: "Banking Options",
    to: "/banking-options",
  },
  {
    label: "Responsible Gaming",
    to: "/responsible-gaming",
  },
  {
    label: "Help Center",
    to: "/help-center",
  },
];

const Navbar = () => {
  return (
    <NavbarSX>
      <FlexBox as="ul">
        {footerMenuList.map((item, key) => (
          <li key={key}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </FlexBox>
    </NavbarSX>
  );
};

export default Navbar;
