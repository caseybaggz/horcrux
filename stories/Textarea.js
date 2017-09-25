// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Textarea } from "../src";

const StoryTextarea = storiesOf("Textarea", module).add("default", () => (
  <Textarea placeholder="Tell a story..." />
));

export default StoryTextarea;
