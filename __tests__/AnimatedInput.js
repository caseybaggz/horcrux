import React from "react";
import ReactDOM from "react-dom";
import { AnimatedInput } from "../src";

describe("<AnimatedInput />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AnimatedInput />, div);
  });
});
