// @flow

import styled from "styled-components";
import * as Fonts from "../fonts";

const Alert /* : object */ = styled.div`
  background: linear-gradient(45deg, #03a9f4 0%, #00bcd4 100%);
  box-sizing: border-box;
  color: #fff;
  padding: 1rem;
  width: 100%;
  ${Fonts};
`;

export default Alert;
