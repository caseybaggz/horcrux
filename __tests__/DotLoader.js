import React from "react";
import ReactDOM from "react-dom";
import { DotLoader } from "../src";

describe("<DotLoader />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DotLoader />, div);
  });
});
