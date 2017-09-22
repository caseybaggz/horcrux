// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Toggle } from "../src";

const StoryToggle = storiesOf("Toggle", module)
  .add("default", () => <Toggle callback={action("callback")} />)
  .add("readOnly", () => <Toggle readOnly callback={action("callback")} />);

export default StoryToggle;
