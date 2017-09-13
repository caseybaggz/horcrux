import React from "react";
import ReactDOM from "react-dom";
import { Alert } from "../src";

describe("<Alert />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Alert />, div);
  });
});
