import { NavLink } from "react-router-dom";
import { FlexBox } from "../../Styled/FlexBox";
import { Navbar as NavbarSX } from "./Styled";

const m88localesMenuList = [
  {
    label: "M88 Thailand",
    to: "/#",
  },
  {
    label: "M88 Vietnam",
    to: "/#",
  },
  {
    label: "M88",
    to: "/#",
  },
  {
    label: "Bhs Indonesia",
    to: "/#",
  },
];

const M88Locales = () => {
  return (
    <NavbarSX>
      <FlexBox as="ul">
        {m88localesMenuList.map((item, key) => (
          <li key={key}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </FlexBox>
    </NavbarSX>
  );
};

export default M88Locales;
