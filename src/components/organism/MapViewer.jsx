/** @jsx jsx */
import React from "react";
import Map from "../molecules/Map";
import MapSidePanel from "../molecules/MapSidePanel";
import { css, jsx } from "@emotion/core";
const MapViewer = ({}) => {
  const mapViewerStyle = css`
    display: flex;
    height: 600px;
    width: 100%;

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      height: 700px;
      & ul {
        width: 100%;
        height: 40%;
        & li {
          text-align: center;
        }
      }
    }
  `;
  return (
    <div css={mapViewerStyle}>
      <Map />
      <MapSidePanel />
    </div>
  );
};

export default MapViewer;
