import styled from "styled-components";

export const Footer = styled.footer`
  background: #000;
  padding: 24px 0 40px;
  font-size: 12px;
  color: #b5b5b5;

  a {
    color: #b5b5b5;
    text-decoration: underline;
  }

  .row-1 {
    padding-bottom: 24px;
  }

  .row-2 {
    padding: 32px 0;
  }

  .row-3 {
    padding-top: 32px;
  }

  .casino-providers {
    img {
      height: 40px;
    }
  }
`;

export const BorderedRow = styled.div`
  border-bottom: 1px dashed #b5b5b5;

  &:last-child {
    border-bottom: 0;
  }
`;

export const AnimateImage = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;

  .colored-image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    overflow: hidden;
    width: 0%;
    height: 100%;
    transition: width 0.3s;

    img {
      max-width: 9999px;
    }
  }

  &:hover {
    .colored-image {
      width: 100%;
    }
  }
`;

export const Navbar = styled.nav`
  li {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 0 8px;
    line-height: 12px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    &:not(:last-child):after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      bottom: -1px;
      width: 1px;
      height: 13px;
      background-color: #b5b5b5;
    }

    a {
      font-weight: 800;
    }
  }
`;
