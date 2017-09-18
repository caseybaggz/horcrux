// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "../src";

const StoryInput = storiesOf("Input", module).add("default", () => (
  <Input
    onChange={action("changed")}
    placeholder="Hogwarts House"
    maxLength="222"
    type="text"
    required
  />
));

export default StoryInput;
