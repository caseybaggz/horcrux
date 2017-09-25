// @flow

import styled from "styled-components";
import * as Fonts from "../../fonts";

const SelectBoxLabel /* : object */ = styled.label`
  box-sizing: border-box;
  color: #646471;
  display: block;
  font-size: 0.875rem;
  letter-spacing: 0.0245rem;
  padding-bottom: 0.75rem;
  text-transform: capitalize;
  ${Fonts};
`;

export default SelectBoxLabel;
