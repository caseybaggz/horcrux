// @flow

import styled from "styled-components";
import * as Fonts from "../../fonts";

const SelectBoxListLi /* : object */ = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #ededf3;
  cursor: pointer;
  letter-spacing: 0.03rem;
  margin-left: 0.625rem;
  margin-right: 1.9375rem;
  padding-bottom: 0.75rem;
  padding-top: 1.625rem;
  text-transform: capitalize;
  transition: border 150ms ease-out, color 150ms ease-out;

  &:last-child {
    margin-bottom: 1rem;
  }

  &:hover {
    border-bottom: 1px solid #9b8fff;
    color: #8071fe;
  }

  ${Fonts};
`;

export default SelectBoxListLi;
