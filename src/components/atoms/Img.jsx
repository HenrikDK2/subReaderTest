/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Img = ({ src, alt, onLoad }) => {
  const imgStyle = css`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  `;

  return (
    <img
      src={src}
      css={imgStyle}
      alt={alt}
      onLoad={onLoad}
      onDragStart={(e) => e.preventDefault()}
    />
  );
};

export default Img;
