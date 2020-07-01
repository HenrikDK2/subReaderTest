/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Img from "../atoms/Img";

const ImageContainer = ({
  src,
  alt,
  className,
  children,
  ref,
  onClick,
  externalClass,
  onLoad,
  id,
}) => {
  const figureStyle = css`
    width: 75px;
    height: auto;
    margin: 0;
    ${className}
  `;

  return (
    <figure id={id} onClick={onClick} ref={ref} className={externalClass} css={figureStyle}>
      <Img src={src} alt={alt} onLoad={onLoad} />
      {children}
    </figure>
  );
};

export default ImageContainer;
