// @flow

import styled from "styled-components";
import * as Fonts from "../fonts";

const Input /* : object */ = styled.input`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 1px solid #607d8b;
  border-radius: 2px;
  box-shadow: none;
  color: #303030;
  display: block;
  font-size: 1rem;
  letter-spacing: 0.011875rem;
  outline: 0;
  padding-bottom: 0.8rem;
  padding-left: 1rem;
  padding-right: 5rem;
  padding-top: 0.8rem;
  transition: border 150ms ease-out;
  width: 100%;

  &:hover {
    border: 1px solid #2196f3;
  }

  &:focus {
    box-shadow: none;
    outline: 0;
  }

  ${Fonts};
`;

export default Input;
