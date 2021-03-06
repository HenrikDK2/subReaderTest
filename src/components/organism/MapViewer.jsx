/** @jsx jsx */
import Map from "../molecules/Map";
import MapSidePanel from "../molecules/MapSidePanel";
import { css, jsx } from "@emotion/core";
const mapViewerStyle = css`
  display: flex;
  height: 600px;
  width: 100%;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    height: calc(100vh - 77px);
    & ul {
      width: 100%;
      height: 35%;
      & li {
        text-align: center;
      }
    }
  }
`;

const MapViewer = () => {
  return (
    <div css={mapViewerStyle}>
      <Map />
      <MapSidePanel />
    </div>
  );
};

export default MapViewer;
