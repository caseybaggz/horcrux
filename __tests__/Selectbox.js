import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { Selectbox } from "../src";

describe("<Selectbox />", () => {
  const books = [
    { name: "LeanUx", value: "0001" },
    { name: "The Lean Startup", value: "0002" },
    { name: "Remote: Office Not Required", value: "0003" }
  ];

  const books2 = [
    { name: "LeanUx", value: 0 },
    { name: "The Lean Startup", value: 1 },
    { name: "Remote: Office Not Required", value: 2 }
  ];

  const bookList = books.map((book, i) => (
    <div key={`book-${i}`} value={book.value}>
      {book.name}
    </div>
  ));

  const bookList2 = books2.map((book, i) => (
    <div key={`book-${i}`} value={book.value}>
      {book.name}
    </div>
  ));

  const badBookList = books.map((book, i) => (
    <div key={`book-${i}`}>{book.name}</div>
  ));

  const props = {
    callback: jest.fn(),
    form: true,
    label: "test choices",
    value: "one"
  };

  const controlledProps = {
    callback: jest.fn(),
    form: true,
    label: "test label",
    name: "test name",
    value: "0002"
  };

  const _Selectbox = <Selectbox>{bookList}</Selectbox>;

  const defaultWrapper = mount(_Selectbox);

  const noChildrenWrapper = mount(<Selectbox {...props}>{[]}</Selectbox>);

  const controlledWrapper = mount(
    <Selectbox {...controlledProps}>{bookList}</Selectbox>
  );

  const numWrapper = mount(<Selectbox {...props}>{bookList2}</Selectbox>);

  const badWrapper = mount(<Selectbox {...props}>{badBookList}</Selectbox>);

  const wrapper = mount(<Selectbox {...props}>{bookList}</Selectbox>);

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
    expect(state).not.toEqual("test one");
    expect(state).toEqual("");
  });

  it("should have a default selectedValue state", () => {
    const state = wrapper.state().selectedValue;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    expect(state).toEqual(props.value);
  });

  // COMPONENT

  it("should not display the list options in the UI by default", () => {
    const selector = wrapper.find("li").length;
    expect(selector).not.toEqual(null);
    expect(selector).not.toEqual(undefined);
    expect(selector).not.toEqual(2);
    expect(selector).toEqual(0);
  });

  it("should display the label in the UI if given", () => {
    const defaultSelector = defaultWrapper.find("label").length;
    const selector = wrapper.find("label");
    expect(defaultSelector).not.toEqual(1);
    expect(defaultSelector).toEqual(0);
    expect(selector.length).not.toEqual(0);
    expect(selector.length).toEqual(1);
    expect(selector.text()).not.toEqual("");
    expect(selector.text()).toEqual("test choices");
  });

  it("should display a hidden form input if form prop given", () => {
    const prop = wrapper.find("input").length;
    expect(prop).not.toEqual(undefined);
    expect(prop).not.toEqual(null);
    expect(prop).not.toEqual(0);
    expect(prop).toEqual(1);
  });
});
