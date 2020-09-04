/** @jsx jsx */
import { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { InfoWindow } from "@react-google-maps/api";
import { mapContext } from "../../context/map.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const infoBox = css`
  display: none;
  ${mapData.showInfo &&
  css`
    display: block;
  `}
  & > h2 {
    margin: 5px 0;
  }

  & div {
    display: flex;
    align-items: center;
    & > svg {
      margin: 0 5px 0 0;
    }
  }

  @media (max-width: 500px) {
    padding: 0 12px 12px 0;
  }
`;
const MarkerInfo = ({ data }) => {
  const [mapData, setMapData] = useContext(mapContext);

  return (
    <InfoWindow
      onCloseClick={() => {
        setMapData({ ...mapData, showInfo: false });
      }}
      position={{
        lat: data.location.latitude,
        lng: data.location.longitude,
      }}
    >
      <div css={infoBox}>
        {data.name && <h2>{data.name}</h2>}
        {data.address && (
          <div>
            <FontAwesomeIcon icon={"address-book"} />
            <p>{data.address}</p>
          </div>
        )}
        {data.phone && data.phone.length > 8 ? (
          <div>
            <FontAwesomeIcon icon={"phone"} />
            <a href={`tel:${data.phone}`}>{data.phone}</a>
          </div>
        ) : null}
      </div>
    </InfoWindow>
  );
};

export default MarkerInfo;
