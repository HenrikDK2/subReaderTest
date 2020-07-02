/** @jsx jsx */
import React from "react";
import { css, jsx, keyframes } from "@emotion/core";
const load8 = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const loaderStyle = css`
  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  & {
    margin: auto;
    position: relative;
    border-top: 1.1em solid #54ecdc;
    border-right: 1.1em solid #54ecdc;
    border-bottom: 1.1em solid #54ecdc;
    border-left: 1.1em solid #ffffff;
    animation: ${load8} 1.1s infinite linear;
  }
`;

const Loader = ({}) => {
  return <div css={loaderStyle}></div>;
};

export default Loader;
