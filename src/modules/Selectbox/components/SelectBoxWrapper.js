// @flow

import styled from "styled-components";

const SelectBoxWrapper /* : object */ = styled.div`
  border: 1px solid ${props => (props.open ? "transparent" : "#b3b3cc")};
  border-radius: 2px;
  box-shadow: none;
  box-sizing: border-box;
  display: inline-block;
  height: 2.75rem;
  overflow: ${props => (props.open ? "visible" : "hidden")};
  position: relative;
  transition: border 150ms ease-out, box-shadow 150ms ease-out;
  width: 28.125rem;

  &::after {
    background-color: black;
    content: "";
    height: 0.4rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 0.625rem;
  }

  &:hover {
    border: 1px solid #8071fe;
    box-shadow: 0 1px 3px 0 rgba(128, 113, 254, 0.2);
  }
`;

export default SelectBoxWrapper;
