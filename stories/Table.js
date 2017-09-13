// @flow

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Table } from "../src";

const StoryTable = storiesOf("Table", module).add("default", () => (
  <Table>
    <thead>
      <tr>
        <th>student</th>
        <th>house</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Harry Potter</td>
        <td>Gryffindor</td>
      </tr>
      <tr>
        <td>Luna Lovegood</td>
        <td>Ravenclaw</td>
      </tr>
      <tr>
        <td>Draco Malfoy</td>
        <td>Slytherin</td>
      </tr>
    </tbody>
  </Table>
));

export default StoryTable;
