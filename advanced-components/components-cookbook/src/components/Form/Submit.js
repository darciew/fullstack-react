import PropTypes from 'prop-types';
import React from 'react';

class Submit extends React.Component {
  static propTypes = {
    submitText: PropTypes.string,
    onSubmit: PropTypes.func,
    isValid: PropTypes.bool,
  };

  static defaultProps = {
    value: 'Submit',
    isValid: true,
  };

  render() {
    return (
      <input
        type='submit'
        onClick={this.props.onSubmit}
        value={this.props.submitText}
        disabled={!this.props.isValid}
      />
    );
  }
}

export default Submit;
