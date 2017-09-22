// @flow

import React from "react";
import styled from "styled-components";

const Wrapper /* : object */ = styled.div`
  display: inline-block;
  position: relative;
`;

const CheckButton /* : object */ = styled.span`
  background: transparent;
  border: 1px solid #bdbdbd;
  border-radius: 50%;
  display: inline-block;
  height: 1rem;
  overflow: hidden;
  position: relative;
  transition: border 150ms ease-out;
  width: 1rem;
  vertical-align: middle;
`;

const Input /* : object */ = styled.input.attrs({ type: "checkbox" })`
  bottom: 0;
  cursor: pointer;
  display: block;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10;

  &:hover + span {
    border: 1px solid #9a9a9a;
  }

  &:checked + span {
    border: ${props => `1px solid ${props.color || "#2196f3"}`};
    background-color: ${props => props.color || "#2196f3"};
  }

  &:checked + span:before,
  &:checked + span:after {
    background-color: #fff;
    bottom: 0;
    content: "";
    display: inline-block;
    height: 2px;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:checked + span:before {
    bottom: -2px;
    border-radius: 2px 0 0 2px;
    left: -6px;
    transform: rotate(45deg);
    width: 6px;
  }

  &:checked + span:after {
    border-radius: 0 2px 2px 0;
    left: 0;
    right: -2px;
    transform: rotate(-45deg);
    width: 9px;
  }
`;

export default function Checkbox({ ...props }) {
  return (
    <Wrapper>
      <Input {...props} type="checkbox" />
      <CheckButton />
    </Wrapper>
  );
}
