// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Code } from "../src";

const StoryCode = storiesOf("Code", module).add("default", () => (
  <Code>sample code</Code>
));

export default StoryCode;
