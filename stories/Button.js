// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src";

const NewButton = Button.extend`
  background-color: transparent;
  border: 2px solid tomato;
  color: tomato;
  font-weight: 600;

  &:hover {
    background-color: tomato;
    color: #fff;
  }
`;

const StoryButton = storiesOf("Button", module)
  .add("default", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("custom styles", () => (
    <NewButton onClick={action("clicked")}>custom styles</NewButton>
  ));

export default StoryButton;
