// @flow

import styled from "styled-components";

const ToggleInput /* : object */ = styled.input.attrs({ type: "checked" })`
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export default ToggleInput;
