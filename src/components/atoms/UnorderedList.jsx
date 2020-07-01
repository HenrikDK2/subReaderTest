/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const UnorderedList = ({ children, className, forwardRef }) => {
  const ListStyle = css`
    padding: 0;
    margin: 0;
    list-style: none;
    ${className}
  `;
  return (
    <ul ref={forwardRef} css={ListStyle}>
      {children}
    </ul>
  );
};

export default UnorderedList;
