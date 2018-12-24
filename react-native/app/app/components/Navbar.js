import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  rightButton: PropTypes.func,
  leftButton: PropTypes.func,
}

export default function Navbar (props) {
  let optionalProps = {}
  props.leftButton && (optionalProps.leftButton = props.leftButton())
  props.rightButton && (optionalProps.rightButton = props.rightButton())
  return (
    <NavigationBar
      {...optionalProps}
      tintColor='#f7f7f7'
      title={{title: props.title}}
    />
  )
}
