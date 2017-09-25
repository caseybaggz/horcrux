// @flow

import styled from "styled-components";
import * as Fonts from "../fonts";

const Textarea /* : object */ = styled.textarea`
  appearance: none;
  border: 1px solid #607d8b;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  ${Fonts};

  &:focus {
    outline: none;
  }
`;

export default Textarea;
