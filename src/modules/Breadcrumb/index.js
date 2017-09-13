// @flow

import React, { Component } from "react";
import styled from "styled-components";
import * as Fonts from "../fonts";

const BreadList = styled.ul`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
  white-space: nowrap;

  li {
    box-sizing: border-box;
    display: inline-block;
    text-transform: capitalize;

    &:after {
      background-size: contain;
      box-sizing: border-box;
      color: #303030;
      content: ">";
      display: inline-block;
      height: 0.5625rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      position: relative;
      width: 0.625rem;
      ${Fonts};
    }

    &:last-child:after {
      display: none;
    }

    a {
      box-sizing: border-box;
      color: #2196f3;
      display: inline-block;
      letter-spacing: 0.0125;
      text-decoration: none;
      text-transform: capitalize;
      transition: color 200ms linear;
      ${Fonts} &:hover {
        color: #303030;
      }
    }

    ${Fonts};
  }
`;

export default class Breadcrumb extends Component {
  render() {
    return (
      <div className="Breadcrumb">
        <BreadList>{this.props.children}</BreadList>
      </div>
    );
  }
}
