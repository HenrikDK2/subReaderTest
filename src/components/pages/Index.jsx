/** @jsx jsx */
import MapViewer from "../organism/MapViewer";
import { css, jsx } from "@emotion/core";
const heading = css`
  background: -webkit-linear-gradient(#54ecdc, #1193c2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 500px) {
    text-align: center;
  }
`;
const Index = () => {
  return (
    <main>
      <h2 css={heading}>Min demo for subReader test</h2>
      <MapViewer />
    </main>
  );
};

export default Index;
