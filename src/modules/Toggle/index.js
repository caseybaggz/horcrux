// @flow

import React, { Component } from "react";
import styled from "styled-components";

import {
  ToggleButton,
  ToggleContainer,
  ToggleInput,
  ToggleWrapper
} from "./components";

type Props = {
  active: boolean,
  callback: () => null,
  readOnly: boolean
};

type State = {
  active: boolean
};

export default class Toggle extends Component<Props, State> {
  static defaultProps = {
    active: false,
    callback: () => null,
    readOnly: false
  };

  state = {
    active: this.props.active
  };

  componentWillReceiveProps(nextProps: object) {
    const { active } = nextProps;

    if (this.state.active !== active) {
      this.setState({ active });
    }
  }

  // PRIVATE

  _updateState = e => {
    const { callback, readOnly } = this.props;

    if (readOnly) {
      return;
    }

    this.setState(
      prevState => ({
        active: !prevState.active
      }),
      () => {
        if (!!callback) {
          callback();
        }
      }
    );
  };

  render() {
    const { active } = this.state;
    const { callback, ...props } = this.props;

    return (
      <ToggleWrapper>
        <ToggleContainer active={active}>
          <ToggleButton active={active} />
          <ToggleInput
            {...props}
            checked={active}
            onClick={this._updateState}
          />
        </ToggleContainer>
      </ToggleWrapper>
    );
  }
}
