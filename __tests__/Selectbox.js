import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { Selectbox } from "../src";

describe("<Selectbox />", () => {
  const props = {
    callback: jest.fn(),
    form: false,
    label: "test choices",
    value: "one"
  };

  const _Selectbox = <Selectbox />;
  const defaultWrapper = mount(_Selectbox);
  const wrapper = mount(
    <Selectbox {...props}>
      <p value="one">test one</p>
      <p value="two">test two</p>
      <p value="three">test three</p>
    </Selectbox>
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(_Selectbox, div);
  });

  // PROPS

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

  it("should have a default form prop", () => {
    const prop = defaultWrapper.props().form;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual(true);
    expect(prop).toEqual(false);
  });

  it("should accept a form prop", () => {
    const prop = wrapper.props().form;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).toEqual(props.form);
  });

  it("should have a default label prop", () => {
    const prop = defaultWrapper.props().label;
    expect(prop).toBeDefined();
    expect(prop).not.toEqual("");
    expect(prop).toBeNull();
  });

  it("should accept a label prop", () => {
    const prop = wrapper.props().label;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).toEqual(props.label);
  });

  it("should have a default value prop", () => {
    const prop = defaultWrapper.props().value;
    expect(prop).toBeDefined();
    expect(prop).not.toEqual("");
    expect(prop).toBeNull();
  });

  it("should accept a value prop", () => {
    const prop = wrapper.props().value;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).toEqual(props.value);
  });

  // STATE

  it("should have a default open state", () => {
    const state = wrapper.state().open;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).toEqual(false);
  });

  it("should have a default selected state", () => {
    const state = wrapper.state().selected;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).not.toEqual("");
    expect(state).toEqual("test one");
  });

  it("should have a default selectedValue state", () => {
    const state = wrapper.state().selectedValue;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).toEqual(props.value);
  });

  // COMPONENT
});
