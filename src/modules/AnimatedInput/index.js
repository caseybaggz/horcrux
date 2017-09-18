// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as Fonts from "../fonts";

type Props /* : object */ = {
  barColor: string,
  inputLabel: string
};

type State /* : object */ = {
  active: boolean,
  passVisibility: boolean
};

const InputWrapper /* : object */ = styled.div`
  box-sizing: border-box;
  display: block;
  margin-bottom: 1rem;
  position: relative;

  > * {
    box-sizing: border-box;
  }
`;

const Label /* : object */ = styled.label`
  bottom: 1rem;
  color: #808091;
  display: inline-block;
  font-size: ${props => (props.active ? "0.875rem" : "1.125rem")};
  letter-spacing: 0.0125rem;
  left: 0;
  position: absolute;
  text-transform: capitalize;
  transform: ${props =>
    props.active ? "translate3d(0, -2.5rem, 0)" : "translate3d(0, 0, 0)"};
  transition: transform 200ms ease-out, font-size 200ms ease-out;
  will-change: transform;
  z-index: 0;
  ${Fonts};
`;

const InputContainer /* : object */ = styled.div`
  border-bottom: 1px solid #808091;
  box-sizing: border-box;
  height: 5.0625rem;
  position: relative;

  &:before {
    background-color: ${props =>
      props.active ? props.barColor : "transparent"};
    box-sizing: border-box;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    display: block;
    position: absolute;
    right: 0;
    transition: width 200ms ease-out;
    width: ${props => (props.active ? "100%" : 0)};
    will-change: width;
    z-index: 15;
  }
`;

const Input /* : object */ = styled.input`
  appearance: none;
  background-color: transparent;
  border: none;
  bottom: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #303030;
  display: block;
  font-size: 1rem;
  letter-spacing: 0.011875rem;
  left: 0;
  outline: 0;
  padding-bottom: 1.1rem;
  padding-left: 0rem;
  padding-top: 1.1rem;
  padding-right: 1rem;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 10;

  &:focus {
    box-shadow: none;
    outline: 0;
  }

  ${Fonts};
`;

const PasswordBtn /* : object */ = styled.span`
  bottom: 0.8rem;
  box-sizing: border-box;
  display: inline-block;
  color: #808091;
  cursor: pointer;
  font-size: 0.7rem;
  height: 1rem;
  letter-spacing: 0.03rem;
  padding-left: 1rem;
  position: absolute;
  right: 2rem;
  text-align: right;
  text-transform: capitalize;
  transition: opacity 150ms ease-out;
  width: 3.125rem;
  ${Fonts} z-index: 20;
`;

export default class AnimatedInput extends Component<Props, State> {
  static propTypes = {
    barColor: PropTypes.string,
    inputLabel: PropTypes.string
  };

  static defaultProps = {
    barColor: "#000",
    inputLabel: ""
  };

  state = {
    active: false,
    passVisibility: false,
    inputType: this.props.type || "text"
  };

  // PRIVATE

  _getPasswordBtn = () => {
    const { active, passVisibility } = this.state;
    const { type } = this.props;
    const BtnText = passVisibility ? "hide" : "show";

    if (type !== "password") {
      return;
    }

    return (
      <PasswordBtn onClick={this._toggleVisibility}>{BtnText}</PasswordBtn>
    );
  };

  _toggleInputType = () => {
    const currentType = this.input.props.type;

    switch (currentType) {
      case "password":
        this._updateInputType("text");
        break;
      case "text":
        this._updateInputType("password");
        break;
      default:
        return;
    }
  };

  _toggleVisibility = () => {
    this.setState(
      prevState => ({
        passVisibility: !prevState.passVisibility
      }),
      () => {
        this._toggleInputType();
      }
    );
  };

  _updateClass = active => {
    this.setState({ active });
  };

  _updateInputType = inputType => {
    this.setState({ inputType });
  };

  render() {
    const { active, inputType } = this.state;
    const { barColor, inputLabel, ...rest } = this.props;
    const passwordBtn = this._getPasswordBtn();

    return (
      <InputWrapper>
        <Label active={active}>{inputLabel}</Label>

        <InputContainer active={active} barColor={barColor}>
          <Input
            {...rest}
            ref={el => (this.input = el)}
            placeholder=""
            onFocus={() => this._updateClass(true)}
            type={inputType}
          />

          {passwordBtn}
        </InputContainer>
      </InputWrapper>
    );
  }
}
