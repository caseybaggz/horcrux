import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { Image } from "../src";
import '../setupTests';

describe("<Image />", () => {
  const props = {
    alt: "test alt",
    src: "test.png"
  };

  const wrapper = mount(<Image {...props} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Image />, div);
  });

  // STATE

  it("should have a default fadeAnim state", () => {
    const state = wrapper.state().fadeAnim;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).not.toEqual([]);
  });
});
