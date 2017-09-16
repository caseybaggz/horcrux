// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as Fonts from "../fonts";

type Props /* : object */ = {
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
  font-size: 1.125rem;
  letter-spacing: 0.0125rem;
  left: 0;
  position: absolute;
  text-transform: capitalize;
  transform: translate3d(0, 0, 0);
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
    background-color: transparent;
    box-sizing: border-box;
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    display: block;
    position: absolute;
    right: 0;
    transition: width 200ms ease-out;
    width: 0;
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

export default class AnimatedInput extends Component<Props, State> {
  static propTypes = {
    inputLabel: PropTypes.string
  };

  static defaultProps = {
    inputLabel: ""
  };

  state = {
    active: false,
    passVisibility: false
  };

  // PRIVATE

  _getPasswordBtn = () => {
    // const { active, passVisibility } = this.state;
    // const { type } = this.props;
    // const BtnClass = classnames('AnimatedInput-toggle-value-btn', { active, show: passVisibility });
    // const BtnText  = passVisibility ? 'hide' : 'show';
    //
    // if (type === 'password') {
    //   return(
    //     <span
    //       className={ BtnClass }
    //       onClick={ this._toggleVisibility }
    //     >
    //       { BtnText }
    //     </span>
    //   );
    // }

    return null;
  };

  _toggleInputType = () => {
    // const currentType = this.input.type;
    //
    // switch (currentType) {
    //   case 'password':
    //     this.input.type = 'text';
    //     break;
    //   case 'text':
    //     this.input.type = 'password';
    //     break;
    //   default:
    //     return;
    // }
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

  _updateClass = () => {
    const { active } = this.state;

    if (!!active) {
      return;
    } else {
      this.setState({ active: true });
    }
  };

  render() {
    const { active } = this.state;
    const { inputLabel, ...rest } = this.props;
    const passwordBtn = this._getPasswordBtn();

    return (
      <InputWrapper>
        <Label>{inputLabel}</Label>

        <InputContainer>
          <Input {...rest} ref={el => (this.input = el)} placeholder="" />

          {passwordBtn}
        </InputContainer>
      </InputWrapper>
    );
  }
}
