// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "../src";

const StoryCheckbox = storiesOf("Checkbox", module)
  .add("default", () => <Checkbox onChange={action("clicked")} />)
  .add("Custom", () => <Checkbox color="#000" onChange={action("clicked")} />);

export default StoryCheckbox;
