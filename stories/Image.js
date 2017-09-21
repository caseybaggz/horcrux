// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Image } from "../src";

const props = {
  alt: "voldemort",
  src:
    "https://pbs.twimg.com/profile_images/815729775776006144/omGh4_qQ_400x400.jpg"
};

const StoryImage = storiesOf("Image", module).add("default", () => (
  <div style={{ maxWidth: "20rem" }}>
    <Image {...props} />
    <p>This component fades the image in after the browser loads it</p>
  </div>
));

export default StoryImage;
