import Marquee from "react-fast-marquee";
import { AnnouncementType } from "../../../types/accountment";
import { FlexBox } from "../../Styled/FlexBox";
import { InnerBox } from "../../Styled/GlobalStyles";
import { AnnounceItem, Announcement as AnnouncementSX } from "./Styled";

const Announcement = () => {
  const settings = {
    gradient: false,
    speed: 80,
  };

  const announcementList: AnnouncementType[] = [
    {
      announcement:
        "7 new and exciting Lottery Games are now available! Win and get up to 1% weekly rebate. Lotto Sign up Bonuses are also available for new members. Try it today and let Lady Luck smile on you. Stay tuned on our New Casino Games on every week. Be the first to feel the thrill and experience on our new branded games every week, Play now at M88!",
      tag: "announcement",
    },
    {
      announcement: ["Bank BNI", "Bank BRI"],
      label: "OFFLINE BANKS",
      tag: "offline",
    },
    {
      announcement: ["Bank BCA", "Bank Mandiri", "Bank Permata"],
      label: "ONLINE BANKS",
      tag: "online",
    },
  ];

  return (
    <AnnouncementSX>
      <InnerBox className="h-100">
        <Marquee {...settings} className="h-100">
          {announcementList.map((item, key) => {
            return Array.isArray(item.announcement) ? (
              <AnnounceItem tag={item.tag} key={key}>
                <FlexBox gap={8}>
                  <span>{item.label}</span>
                  <FlexBox as="ul" gap={8}>
                    {item.announcement.map((item2, key2) => (
                      <li key={key2}>{item2}</li>
                    ))}
                  </FlexBox>
                </FlexBox>
              </AnnounceItem>
            ) : (
              <AnnounceItem tag={item.tag} key={key}>
                {item.announcement}
              </AnnounceItem>
            );
          })}
        </Marquee>
      </InnerBox>
    </AnnouncementSX>
  );
};

export default Announcement;
