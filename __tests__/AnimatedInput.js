import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { AnimatedInput } from "../src";

describe("<AnimatedInput />", () => {
  const props = {
    barColor: "blue",
    inputLabel: "enter password",
    type: "password",
    required: true
  };

  const _AnimatedInput = <AnimatedInput />;
  const defaultWrapper = mount(_AnimatedInput);
  const wrapper = mount(<AnimatedInput {...props} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(_AnimatedInput, div);
  });

  // PROPS

  it("should have a default barColor prop", () => {
    const prop = defaultWrapper.props().barColor;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual("");
    expect(prop).toEqual("#000");
  });

  it("should accept a barColor prop", () => {
    const prop = wrapper.props().barColor;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual("");
    expect(prop).toEqual(props.barColor);
  });

  it("should have a default inputLabel prop", () => {
    const prop = defaultWrapper.props().inputLabel;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).toEqual("");
  });

  it("should accept a inputLabel prop", () => {
    const prop = wrapper.props().inputLabel;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual("");
    expect(prop).toEqual(props.inputLabel);
  });

  // STATE

  it("should have a default active state", () => {
    const state = wrapper.state().active;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).not.toEqual(true);
    expect(state).toEqual(false);
  });

  it("should have a default passVisibility state", () => {
    const state = wrapper.state().passVisibility;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).not.toEqual(true);
    expect(state).toEqual(false);
  });

  it("should have a default inputType state", () => {
    const state = wrapper.state().inputType;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).not.toEqual("text");
    expect(state).toEqual(props.type);
  });

  // COMPONENT

  it("should update the state onFocus", () => {
    const el = wrapper.find("input");
    el.simulate("focus");
    setTimeout(() => {
      expect(wrapper.state().active).not.toEqual(false);
      expect(wrapper.state().active).not.toEqual(true);
    }, 250);
  });
});
