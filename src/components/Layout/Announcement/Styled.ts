import styled, { css } from "styled-components";

export const Announcement = styled.div`
  background-color: #000;
  height: 40px;
  color: #fff;
  font-size: 12px;
`;

export const tags = {
  announcement: css`
    color: #ffcd00;
  `,
  offline: css`
    color: #bc1f00;
  `,
  online: css`
    color: #2d8c44;
  `,
};

export const AnnounceItem = styled.div<{
  tag: "announcement" | "offline" | "online";
}>`
  ${({ tag }) => tags[tag]}
`;
