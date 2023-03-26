import styled, { css } from "styled-components";

export const Announcement = styled.div`
  background-color: #000;
  height: 40px;
  color: #fff;
  font-size: 12px;

  .marquee-container:after {
    content: "";
    width: 25px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background: -moz-linear-gradient(
      left,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 0) 100%
    );
    background: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 0) 100%
    );
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 */
  }
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

export const DateTime = styled.time`
  white-space: nowrap;
`;
