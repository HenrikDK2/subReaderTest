/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { mapContext } from "../../context/map.context";
const SearchBar = ({}) => {
  const [mapData, setMapData] = useContext(mapContext);
  const inputStyle = css`
    transition: background 0.5s;
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    left: 50%;
    top: 20px;
    transform: translate(-50%);
    border: none;
    max-width: 300px;
    padding: 0 10px;
    width: 95%;
    height: 40px;
    font-size: 1.25rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
    z-index: 20;
    box-sizing: border-box;

    &:focus {
      background: rgba(255, 255, 255, 1);
    }
  `;
  return (
    <input
      css={inputStyle}
      type="text"
      placeholder="Søgefelt"
      onChange={(e) => {
        const filter = mapData.cinemas.filter((cinema) => {
          if (cinema.name.toLowerCase().includes(e.target.value.toLowerCase())) return cinema;
        });
        setMapData({ ...mapData, filteredCinemas: filter, showInfo: false });
      }}
    />
  );
};

export default SearchBar;
