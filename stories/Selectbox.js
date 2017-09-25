// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Selectbox } from "../src";

const StoryPill = storiesOf("Selectbox", module).add("default", () => (
  <Selectbox callback={action("callback")} label="choose house">
    <p>Gryffindor</p>
    <p>Hufflepuff</p>
    <p>Ravenclaw</p>
    <p>Slytherin</p>
  </Selectbox>
));

export default StoryPill;
