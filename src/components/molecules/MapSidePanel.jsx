/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import List from "../atoms/UnorderedList";
import ListItem from "../atoms/MapListItem";
import { mapContext } from "../../context/map.context";

const MapSidePanel = ({}) => {
  const [mapData, setMapData] = useContext(mapContext);
  const sidebarStyle = css`
    width: 300px;
    height: 100%;
    background: #f7f7f7;
    overflow: scroll;
    padding: 0 2px;
  `;

  return (
    <List className={sidebarStyle}>
      {mapData &&
        mapData.cinemas.map((cinema) => (
          <ListItem
            onClick={(e) => {
              setMapData({ ...mapData, currentCinema: cinema, showInfo: true });
            }}
          >
            {cinema.name}
          </ListItem>
        ))}
    </List>
  );
};

export default MapSidePanel;
