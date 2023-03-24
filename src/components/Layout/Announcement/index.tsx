import { FlexBox } from "../../Styled/FlexBox";
import { AnnounceItem, MarqueeStyled } from "./Styled";

const Announcement = () => {
  const settings = {
    gradient: false,
    speed: 80,
  };

  type AnnouncementType =
    | {
        announcement: string;
        label?: never;
      }
    | {
        announcement: string[];
        label: string;
      };

  const announcementList: AnnouncementType[] = [
    {
      announcement:
        "7 new and exciting Lottery Games are now available! Win and get up to 1% weekly rebate. Lotto Sign up Bonuses are also available for new members. Try it today and let Lady Luck smile on you. Stay tuned on our New Casino Games on every week. Be the first to feel the thrill and experience on our new branded games every week, Play now at M88!",
    },
    {
      announcement: ["Bank BNI", "Bank BRI"],
      label: "OFFLINE BANKS",
    },
  ];

  return (
    <MarqueeStyled {...settings}>
      {announcementList.map((item) => {
        return Array.isArray(item.announcement) ? (
          <AnnounceItem>
            <FlexBox gap={8}>
              <span>{item.label}</span>
              <FlexBox as="ul" gap={8}>
                {item.announcement.map((itemInner) => (
                  <li>{itemInner}</li>
                ))}
              </FlexBox>
            </FlexBox>
          </AnnounceItem>
        ) : (
          <AnnounceItem>{item.announcement}</AnnounceItem>
        );
      })}
    </MarqueeStyled>
  );
};

export default Announcement;
