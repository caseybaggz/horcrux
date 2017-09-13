// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Pill } from "../src";

const NewPill = Pill.extend`
  background: tomato;
  border-radius: 2px;
  color: white;
  letter-spacing: 0.4rem;
  text-transform: capitalize;
  transition: 150ms background ease-out;

  &:hover {
    background-color: black;
    color: #fff;
  }
`;

const StoryPill = storiesOf("Pill", module)
  .add("default", () => <Pill>brilliant</Pill>)
  .add("custom styles", () => <NewPill>mudblood</NewPill>);

export default StoryPill;
