import React from "react";
import ReactDOM from "react-dom";
import { Textarea } from "../src";
import '../setupTests';

describe("<Textarea />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Textarea />, div);
  });
});
