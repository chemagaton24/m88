export type AnnouncementType =
  | {
      announcement: string;
      label?: never;
      tag: "announcement";
    }
  | {
      announcement: string[];
      label: string;
      tag: "offline" | "online";
    };
