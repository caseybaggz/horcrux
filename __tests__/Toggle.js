import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { Toggle } from "../src";

describe("<Toggle />", () => {
  const props = {
    active: true,
    readOnly: false,
    toggleRef: jest.fn()
  };

  const _Toggle = <Toggle />;
  const defaultWrapper = mount(_Toggle);
  const wrapper = mount(<Toggle {...props} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(_Toggle, div);
  });

  // PROPS

  it("should have a default active prop", () => {
    const prop = defaultWrapper.props().active;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual(true);
    expect(prop).toEqual(false);
  });

  it("should accept a active prop", () => {
    const prop = wrapper.props().active;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).toEqual(props.active);
  });

  it("should have a default readOnly prop", () => {
    const prop = defaultWrapper.props().readOnly;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual(true);
    expect(prop).toEqual(false);
  });

  it("should accept a readOnly prop", () => {
    const prop = wrapper.props().readOnly;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).toEqual(props.readOnly);
  });

  it("should have a default callback prop", () => {
    const prop = defaultWrapper.props().callback;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(() => prop()).not.toThrow();
  });

  it("should accept a callback prop", () => {
    const prop = wrapper.props().callback;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).toEqual(props.callback);
  });

  // STATE

  it("should have a default active state", () => {
    const state = wrapper.state().active;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).not.toEqual(!props.active);
    expect(state).toEqual(props.active);
  });

  // COMPONENT
});
