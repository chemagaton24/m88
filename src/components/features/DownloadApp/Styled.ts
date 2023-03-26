import styled from "styled-components";

export const DownloadAppBannerWrap = styled.div`
  position: relative;
  height: 100px;
  padding-top: 40px;
`;

export const Inner = styled.div`
  position: relative;
  background-color: #000;
  height: 100px;
  border-radius: 2px;
  font-size: 0;
  padding: 0 16px 0 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:before {
    content: "";
    display: block;
    background-image: url("${require("../../../assets/images/cards/DownloadApp/bg.png")}");
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 450px 140px;
    width: 450px;
    height: 140px;
    position: absolute;
    left: 8px;
    bottom: 0;
    pointer-events: none;
  }
`;
