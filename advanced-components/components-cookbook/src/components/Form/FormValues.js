import PropTypes from 'prop-types';
/* eslint-disable react/no-unused-prop-types, arrow-body-style */
import React, { Children } from 'react';

class FormValues extends React.Component {
  static propTypes = {
    initialData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
    children: PropTypes.element.isRequired,
  };

  state = {
    data: this.props.initialData,
  };

  onSubmit = (data) => {
    this.setState({
      data: data,
    });
  };

  renderChildren = () => {
    const that = this;
    return Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onSubmit: this.onSubmit,
        initialData: this.state.data,
      });
    });
  };

  render() {
    return (
      <div>
        {this.renderChildren()}
        <pre><code>{JSON.stringify(this.state.data, null, '  ')}</code></pre>
      </div>
    );
  }
}

export default FormValues;
