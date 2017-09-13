// @flow

import styled from "styled-components";
import * as Fonts from "../fonts";

const Pill /* : object */ = styled.span`
  background-color: #607d8b;
  border-radius: 2px;
  display: inline-block;
  color: #fff;
  padding-bottom: 0.5rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.5rem;
  text-transform: uppercase;
  ${Fonts};
`;

export default Pill;
