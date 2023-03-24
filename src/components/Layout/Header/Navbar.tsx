import { NavLink } from "react-router-dom";
import { FlexBox } from "../../Styled/FlexBox";
import { TiHome } from "react-icons/ti";

const menuList = [
  {
    label: "Home",
    to: "/",
    icon: <TiHome />,
  },
  {
    label: "Sports",
    to: "/sportsbook",
  },
  {
    label: "Live Casino",
    to: "/livecasino",
  },
  {
    label: "Casino",
    to: "/casino",
  },
  {
    label: "Keno & Lotto",
    to: "/kenolotto",
  },
  {
    label: "Poker",
    to: "/poker",
  },
  {
    label: "Promotions",
    to: "/promotions",
  },
  {
    label: "VIP",
    to: "/vip",
  },
];

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className={className}>
      <FlexBox as="ul" justifyContent="flex-start" gap={24} className="h-100">
        {menuList.map((item, key) => (
          <li key={key}>
            <NavLink to={item.to}>{item.icon ?? item.label}</NavLink>
          </li>
        ))}
      </FlexBox>
    </nav>
  );
};

export default Navbar;
