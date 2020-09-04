/** @jsx jsx */
import { useContext } from "react";
import uniqid from "uniqid";
import { css, jsx } from "@emotion/core";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { mapContext } from "../../context/map.context";
import MarkerInfo from "../molecules/MarkerInfo";
import SearchBar from "../molecules/SearchBar";
import subreaderMarker from "../../images/subreaderMarker.png";
import Loader from "../atoms/Loader";

const Map = () => {
  const [mapData, setMapData] = useContext(mapContext);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return <Loader />;

  return (
    <div
      css={css`
        height: 100%;
        width: 100%;
      `}
    >
      {mapData && (
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          zoom={7}
          center={{ lat: 56, lng: 10.6 }}
          options={{ disableDefaultUI: true, zoomControl: true }}
        >
          {mapData.showInfo && <MarkerInfo data={mapData.currentCinema} />}

          {mapData.filteredCinemas.map((cinema) => (
            <Marker
              icon={subreaderMarker}
              key={uniqid("cinema")}
              onClick={(e) => {
                setMapData({ ...mapData, currentCinema: cinema, showInfo: true });
              }}
              position={{ lat: cinema.location.latitude, lng: cinema.location.longitude }}
            />
          ))}
          <SearchBar />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
