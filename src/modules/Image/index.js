// @flow

import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import styled from "styled-components";

const ImageWrapper /* : object */ = styled.div`
  background-color: #f7f7f9;

  img {
    display: inline-block;
    width: 100%;
  }
`;

export default class Image extends Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  loadImage = () => {
    const { fadeAnim } = this.state;
    const options: {
      toValue: number,
      duration: number
    } = {
      toValue: 1,
      duration: 800
    };

    if (!!this.img) {
      Animated.timing(fadeAnim, options).start();
    }
  };

  render() {
    const { fadeAnim } = this.state;

    return (
      <ImageWrapper>
        <Animated.img
          {...this.props}
          onLoad={this.loadImage}
          ref={el => (el = this.img = el)}
          style={{
            opacity: fadeAnim
          }}
        />
      </ImageWrapper>
    );
  }
}
