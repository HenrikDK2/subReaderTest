/** @jsx jsx */
import React from "react";
import { css, jsx, Global as GlobalElm } from "@emotion/core";

const Global = ({}) => {
  //GlobalStyle
  const globalStyle = css`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

    body {
      font-family: "Roboto", sans-serif;
    }

    .gm-style-iw-c {
      padding: 12px !important;
    }
  `;

  return <GlobalElm styles={globalStyle} />;
};

export default Global;
