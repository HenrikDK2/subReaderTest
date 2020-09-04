/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const itemStyle = css`
  user-select: none;
  text-align: right;
  padding: 6px 0;
  font-size: 0.7rem;
  cursor: pointer;
  font-weight: 500;
`;

const MapListItem = ({ children, onClick }) => {
  return (
    <li onClick={onClick} css={itemStyle}>
      {children}
    </li>
  );
};

export default MapListItem;
