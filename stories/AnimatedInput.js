// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AnimatedInput } from "../src";

const StoryButton = storiesOf("AnimatedInput", module)
  .add("default", () => (
    <AnimatedInput
      inputLabel="name"
      onChange={action("changed")}
      placeholder="test"
      type="text"
      maxLength="222"
      required
    />
  ))
  .add("password", () => (
    <AnimatedInput
      barColor="lightGrey"
      inputLabel="password"
      onChange={action("changed")}
      placeholder="test"
      type="password"
      maxLength="222"
      required
    />
  ));

export default StoryButton;
