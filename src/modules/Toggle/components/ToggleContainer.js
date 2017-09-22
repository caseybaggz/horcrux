// @flow

import styled from "styled-components";

const ToggleContainer /* : object */ = styled.div`
  background-color: ${props => (props.active ? "#00E7AE" : "#e1e1ea")};
  border-radius: 50px;
  box-shadow: inset 0 1px 1px 0
    ${props =>
      props.active ? "rgba(0, 0, 0, 0.1)" : "rgba(179, 179, 204, 0.2)"};
  display: block;
  height: 100%;
  position: relative;
  transition: background-color 150ms ease-out, background-image 150ms ease-out,
    background-position 150ms ease-out, box-shadow 150ms ease-out;
  width: 100%;
  z-index: 0;

  &:before {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    height: 0.7rem;
    opacity: ${props => (props.active ? 0 : 1)};
    position: absolute;
    right: 0.8rem;
    top: 0.4rem;
    transition: opacity 100ms ease-out;
    width: 0.7rem;
  }

  &:after {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    height: 0.7rem;
    opacity: ${props => (props.active ? 1 : 0)};
    position: absolute;
    left: 0.8rem;
    top: 0.35rem;
    transition: opacity 100ms ease-out;
    width: 0.9rem;
  }
`;

export default ToggleContainer;
