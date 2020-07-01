/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { InfoWindow } from "@react-google-maps/api";
import { mapContext } from "../../context/map.context";

const MarkerInfo = ({ data }) => {
  const [mapData, setMapData] = useContext(mapContext);
  const infoBox = css`
    display: none;
    ${mapData.showInfo &&
    css`
      display: block;
    `}
    & > h2 {
      margin: 5px 0;
    }

    @media (max-width: 500px) {
      padding: 0 12px 12px 0;
    }
  `;

  return (
    <InfoWindow
      onCloseClick={(e) => {
        setMapData({ ...mapData, showInfo: false });
      }}
      position={{
        lat: data.location.latitude,
        lng: data.location.longitude,
      }}
    >
      <div css={infoBox}>
        {data.name && <h2>{data.name}</h2>}
        {data.address && <p>{data.address}</p>}
        {data.phone && <a href={`tel:${data.phone}`}>{data.phone}</a>}
      </div>
    </InfoWindow>
  );
};

export default MarkerInfo;
