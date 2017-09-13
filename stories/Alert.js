// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Alert } from "../src";

const NewAlert = Alert.extend`
  background: tomato;
  border-radius: 2px;
  color: white;
  text-transform: capitalize;
  transition: 150ms background ease-out;

  &:hover {
    background-color: black;
    color: #fff;
  }
`;

const StoryAlert = storiesOf("Alert", module)
  .add("default", () => <Alert>Hello Alert</Alert>)
  .add("custom styles", () => <NewAlert>custom styles</NewAlert>);

export default StoryAlert;
