// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Breadcrumb } from "../src";

const StoryBread = storiesOf("Breadcrumb", module).add("default", () => (
  <Breadcrumb>
    <li>home</li>
    <li>
      <a href="#">about</a>
    </li>
  </Breadcrumb>
));

export default StoryBread;
