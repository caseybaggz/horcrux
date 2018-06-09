import React from "react";
import ReactDOM from "react-dom";
import { Code } from "../src";
import '../setupTests';

describe("<Code />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Code />, div);
  });
});
