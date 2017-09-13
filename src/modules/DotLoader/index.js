// @flow

import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const scale /* : object */ = keyframes`
  0% {
    transform: scale(0);
  }

  25% {
    transform: scale(0.9, 0.9);
    background: #93e1d7;
  }

  50% {
    transform: scale(1, 1);
    margin: 0 3px;
    background: #2FAC9B;
  }

  100% {
    transform: scale(0);
  }
`;

const curve /* : string */ = "cubic-bezier(0.6, -0.28, 0.735, 0.045)";

const DotListWrapper /* : object */ = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  width: 3rem;
`;

const DotList /* : object */ = styled.ul`
  box-sizing: border-box;
  list-style: none;
  position: relative;
  width: 100%;
  white-space: nowrap;
`;

const DotLi /* : object */ = styled.li`
  box-sizing: border-box;
  background-color: #808091;
  border-radius: 50%;
  display: inline-block;
  height: 0.375rem;
  width: 0.375rem;

  &:nth-child(1) {
    border-radius: 0;
    background-clip: padding-box;
    border-radius: 500px;
    animation: ${scale} 1s 0.1s infinite ${curve};
  }

  &:nth-child(2) {
    background-clip: padding-box;
    border-radius: 500px;
    animation: ${scale} 1s 0.2s infinite ${curve};
  }

  &:nth-child(3) {
    border-radius: 0;
    background-clip: padding-box;
    border-radius: 500px;
    animation: ${scale} 1s 0.3s infinite ${curve};
  }
`;

const dots /* : object */ = (
  <DotListWrapper>
    <DotList>
      <DotLi />
      <DotLi />
      <DotLi />
    </DotList>
  </DotListWrapper>
);

export default class DotLoader extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return dots;
  }
}
