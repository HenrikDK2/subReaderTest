/** @jsx jsx */
import { useContext } from "react";
import { css, jsx } from "@emotion/core";
import List from "../atoms/UnorderedList";
import ListItem from "../atoms/MapListItem";
import { mapContext } from "../../context/map.context";

const sidebarStyle = css`
  width: 300px;
  height: 100%;
  background: #f7f7f7;
  overflow: scroll;
  padding: 0 2px;
  overflow-x: hidden;
  scrollbar-width: thin;

  & li:nth-of-type(2n) {
    background: #fff;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cdcdcd;
  }
`;
const MapSidePanel = () => {
  const [mapData, setMapData] = useContext(mapContext);

  return (
    <List className={sidebarStyle}>
      {mapData &&
        mapData.filteredCinemas.map((cinema) => (
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
