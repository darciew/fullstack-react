import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ListView, StyleSheet } from 'react-native'
import Navbar from './Navbar'

export default class Home extends Component {
  static propTypes = {
    dataSource: PropTypes.object.isRequired,
    usersVotes: PropTypes.object.isRequired,
    toNewQuestion: PropTypes.func.isRequired,
    toQuestion: PropTypes.func.isRequired,
  }
  renderRow = (question) => {
    return  (
      <TouchableOpacity
        onPress={() => this.props.toQuestion(question.id)}>
          <View style={[styles.row, {borderLeftColor: this.props.usersVotes[question.id] === true ? 'green' : 'red'}]}>
            <Text>{question.title}</Text>
          </View>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <View>
        <Navbar
          title='Home'
          rightButton={() => (
            <TouchableOpacity
              onPress={this.props.toNewQuestion}
              style={{justifyContent: 'center', marginRight: 10}}>
                <Text style={{fontSize: 35}}>+</Text>
            </TouchableOpacity>
          )}
        />
        <ScrollView>
          <ListView renderRow={this.renderRow} dataSource={this.props.dataSource} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    borderLeftWidth: 2,
    margin: 10,
    padding: 10
  }
})
