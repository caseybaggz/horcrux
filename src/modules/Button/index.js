// @flow

import styled from "styled-components";

const Button /* : object */ = styled.button`
  appearance: none;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 0.9rem;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, arial, sans-serif;
  letter-spacing: 0.08rem;
  margin: 0.5em auto;
  min-width: 11.9375rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 200ms ease-out, color 200ms ease-out;
  -webkit-font-smoothing: antialiased;

  &:hover {
    background-color: transparent;
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
