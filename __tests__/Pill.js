import React from "react";
import ReactDOM from "react-dom";
import { Pill } from "../src";

describe("<Pill />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pill />, div);
  });
});
