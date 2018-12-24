import PropTypes from 'prop-types';
/* eslint-disable react/no-unused-prop-types, arrow-body-style */
import React from 'react';

class Input extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.object,
  };

  render() {
    const props = this.props;
    return React.createElement('input', {
      type: props.type,
      name: props.name,
      placeholder: props.placeholder,
      onChange: props.onChange,
      value: props.data[props.name], // If there is a value here
    });
  }
}

export default Input;
