// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Image } from "../src";

import HP from '../img/harry-potter.jpg';

const props = {
  alt: "voldemort",
  src: HP
};

const StoryImage = storiesOf("Image", module).add("default", () => (
  <div style={{ maxWidth: "20rem" }}>
    <Image {...props} />
    <p>This component fades the image in after the browser loads it</p>
  </div>
));

export default StoryImage;
