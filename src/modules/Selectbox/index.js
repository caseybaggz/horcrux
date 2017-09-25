// @flow

import React, { Component } from "react";
import { ValidComponentChildren } from "../../utils";

import {
  SelectBoxContainer,
  SelectBoxLabel,
  SelectBoxListLi,
  SelectBoxListUl,
  SelectBoxListWrapper,
  SelectBoxSelection,
  SelectBoxWrapper
} from "./components";

type Props = {
  callback: () => null,
  form: boolean,
  label: string,
  value: mixed
};

type State = {
  open: boolean,
  selected: string,
  selectedValue: string
};

export default class Selectbox extends Component<Props, State> {
  static defaultProps = {
    callback: () => console.log("add a callback prop to <SelectBox />"),
    form: false,
    label: null,
    value: null
  };

  state = {
    open: false,
    selected: "",
    selectedValue: this.props.value || ""
  };

  componentDidMount() {
    const { value } = this.props;

    if (!!value) {
      this._handleControlledValue();
    }
  }

  componentWillReceiveProps({ children, value }) {
    // controlled component:
    // if component receives a new value, change appropriately
    if (!!value && value !== this.props.value) {
      this._handleControlledValue(children, value);
    }
  }

  // PRIVATE

  _handleControlledValue = (
    children = this.props.children,
    value = this.props.value
  ) => {
    const selectedChild = ValidComponentChildren.find(
      children,
      child => String(child.props.value) === String(value)
    );

    if (!!!selectedChild) {
      return;
    }

    this.setState({
      selected: selectedChild.props.children,
      selectedValue: selectedChild.props.value
    });
  };

  _getFormContent = () => {
    const { selectedValue } = this.state;
    const { form, callback, children, ...props } = this.props;

    if (!!!form) {
      return null;
    }

    return <input {...props} type="hidden" value={selectedValue || ""} />;
  };

  _getOptionsContent = () => {
    const { open } = this.state;
    const listItems = this._getList();

    if (!open) {
      return null;
    }

    return (
      <SelectBoxListWrapper>
        <SelectBoxListUl>{listItems}</SelectBoxListUl>
      </SelectBoxListWrapper>
    );
  };

  _getLabelContent = () => {
    const { label } = this.props;

    if (!!!label) {
      return null;
    }

    return <SelectBoxLabel>{label}</SelectBoxLabel>;
  };

  _getList = () => {
    const { children } = this.props;

    return ValidComponentChildren.map(children, child => (
      <SelectBoxListLi onClick={() => this._selectItem(child)}>
        {child}
      </SelectBoxListLi>
    ));
  };

  _selectItem = (selected: object, e: object) => {
    const { callback } = this.props;
    const isControlled = this.props.value;
    const currentSelected = this.state.selected;
    const currentValue = this.state.selectedValue;
    const text = selected.props.children;
    const hasValue =
      selected.props.value || selected.props.value === 0 ? true : false;
    const value = hasValue
      ? selected.props.value.toString()
      : selected.props.children;
    const obj = { target: { value, text } };

    this.setState(
      {
        open: false,
        selected: !!isControlled ? currentSelected : text,
        selectedValue: !!isControlled ? currentValue : value
      },
      () => {
        callback(obj);
      }
    );
  };

  _showOptions = () => {
    this.setState({ open: true });
  };

  _closeOptions = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, selected } = this.state;
    const { children } = this.props;
    const formInput = this._getFormContent();
    const labelContent = this._getLabelContent();
    const optionsContent = this._getOptionsContent();

    return (
      <SelectBoxContainer tabIndex="0" onBlur={this._closeOptions}>
        {labelContent}

        <SelectBoxWrapper open={open}>
          {formInput}

          <SelectBoxSelection onClick={this._showOptions}>
            {selected || "choose option"}
          </SelectBoxSelection>

          {optionsContent}
        </SelectBoxWrapper>
      </SelectBoxContainer>
    );
  }
}
