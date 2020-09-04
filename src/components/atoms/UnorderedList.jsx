/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ListStyle = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const UnorderedList = ({ children, className, forwardRef }) => {
  return (
    <ul ref={forwardRef} css={[ListStyle, className]}>
      {children}
    </ul>
  );
};

export default UnorderedList;
