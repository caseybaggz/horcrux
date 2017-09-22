// @flow

import styled from "styled-components";

const ToggleButton /* : object */ = styled.span`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 1px 0 2px 0 rgba(0, 0, 9, 0.1);
  bottom: 0;
  display: inline-block;
  height: 1.375rem;
  left: 1px;
  position: absolute;
  top: 1px;
  transform: ${props =>
    props.active ? "translate3d(2rem, 0, 0)" : "translate3d(0, 0, 0)"};
  transition: transform 150ms ease-out;
  width: 1.375rem;
  z-index: 10;
`;

export default ToggleButton;
