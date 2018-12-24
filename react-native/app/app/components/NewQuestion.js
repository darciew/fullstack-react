import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Navbar from './Navbar'

export default class NewQuestion extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  state = {
    title: '',
    firstOption: '',
    secondOption: '',
  }
  render () {
    const { title, firstOption, secondOption } = this.state
    return (
      <View style={styles.container}>
        <Navbar
          title='New Question'
          leftButton={() => (
            <TouchableOpacity
              onPress={this.props.onCancel}
              style={[{marginLeft: 10}, styles.navContainer]}>
                <Text style={styles.navText}>Cancel</Text>
            </TouchableOpacity>
          )}
          rightButton={() => {
            return !title || !firstOption || !secondOption
              ? <View />
              : <TouchableOpacity
                  onPress={() => this.props.onSubmit({title, firstOption, secondOption})}
                  style={[{marginRight: 10}, styles.navContainer]}>
                    <Text style={styles.navText}>Submit</Text>
                </TouchableOpacity>
          }}
        />
        <View style={styles.inputContainer}>
          <Text>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(title) => this.setState({title})} />
        </View>
        <View style={styles.inputContainer}>
          <Text>First Option</Text>
          <TextInput
            style={styles.input}
            value={firstOption}
            onChangeText={(firstOption) => this.setState({firstOption})} />
        </View>
        <View style={styles.inputContainer}>
          <Text>Second Option</Text>
          <TextInput
            style={styles.input}
            value={secondOption}
            onChangeText={(secondOption) => this.setState({secondOption})} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  navContainer: {
    justifyContent: 'center',
  },
  navText: {
    fontSize: 15,
  },
  inputContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: '#c5c5c5',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
})
