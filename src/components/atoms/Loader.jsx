/** @jsx jsx */
import React from "react";
import { css, jsx, keyframes } from "@emotion/core";
const load = keyframes`
  0%{
      opacity: 0.08;
      filter: blur(5px);
      letter-spacing: 3px;
      }
`;

const loaderStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  font-family: Helvetica, sans-serif, Arial;
  animation: ${load} 1.2s infinite 0s ease-in-out;
  animation-direction: alternate;
  text-shadow: 0 0 1px white;
`;

const Loader = ({}) => {
  return <h2 css={loaderStyle}>Loading</h2>;
};

export default Loader;
