// @flow

import styled from "styled-components";
import * as Fonts from "../../fonts";

const SelectBoxSelection /* : object */ = styled.div`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 100%;
  letter-spacing: 0.03rem;
  padding-left: 1rem;
  text-transform: capitalize;
  width: 100%;
  ${Fonts};
`;

export default SelectBoxSelection;
