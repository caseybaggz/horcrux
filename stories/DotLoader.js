// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DotLoader } from "../src";

const StoryDotLoader = storiesOf("DotLoader", module).add("default", () => (
  <DotLoader />
));

export default StoryDotLoader;
