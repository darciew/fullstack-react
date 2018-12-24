import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import React, { Children } from 'react';
import $ from 'jquery';

import Submit from './Submit';
import Input from './Input';

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    submitComponent: PropTypes.element,
    initialData: PropTypes.object,
    submitText: PropTypes.string,
  };

  static defaultProps = {
    submitComponent: <Submit />,
    initialData: {},
    submitText: 'Save',
  };

  onChange = (key) => {
    const that = this;
    return function (e) {
      const newValue = e.target.value;
      const newData = Object.assign({}, that.state.data, {
        [key]: newValue,
      });
      that.setState({
        data: newData,
        isValid: that.checkValidation(newData),
      });
    };
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.data);
  };

  checkValidation = (data) => {
    // For every child node, check if there is a validate
    // function, otherwise assume that validation is a simple
    // isPresent check
    const isValid = Children.map(this.props.children, (c) => {
      const props = c.props;
      const name = props.name;

      return props.validate ? props.validate(data) : !!data[name];
    }).filter(b => !b);
    return isValid.length == 0;
  };

  componentWillUpdate(nextProps, nextState) {
    const btn = ReactDOM.findDOMNode(this.refs.submitBtn);

    if (nextState.isValid) {
      $(btn).css({ opacity: 1 });
    } else {
      $(btn).css({ opacity: 0.5 });
    }
  }

  renderChildren = () => {
    return Children.map(this.props.children, (child, idx) => {
      return React.cloneElement(child, {
        ...child.props,
        key: idx,
        data: this.state.data,
        onChange: this.onChange(child.props.name),
        isValid: this.state.isValid,
      });
    });
  };

  renderSubmitBtn = () => {
    const Component = this.props.submitComponent;
    return React.cloneElement(Component, {
      onSubmit: this.onSubmit,
      isValid: this.state.isValid,
      value: this.props.submitText,
      ref: 'submitBtn',
    });
  };

  state = {
    isValid: this.checkValidation(this.props.initialData),
    data: this.props.initialData,
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          {this.renderChildren()}
          {this.renderSubmitBtn()}
        </form>
      </div>
    );
  }
}

Form.Input = Input;
Form.Submit = Submit;

export default Form;
