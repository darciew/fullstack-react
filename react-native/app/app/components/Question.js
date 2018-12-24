import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Navbar from './Navbar'

function Results ({info, totalVotes}) {
  return (
    <View>
      <Text style={styles.option}>{info.option}</Text>
      <Text style={styles.voteInfo}>Votes: {info.votes}  -   {totalVotes === 0 ? 0 : parseInt(info.votes / totalVotes * 100)}%</Text>
    </View>
  )
}

Question.propTypes = {
  info: PropTypes.object.isRequired,
  hasVoted: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
}

export default function Question (props) {
  return (
    <View style={styles.container}>
      <Navbar
        title='Would you Rather'
        leftButton={() => (
          <TouchableOpacity
            onPress={props.onCancel}
            style={[{marginLeft: 10}, styles.navContainer]}>
              <Text style={styles.navText}>Back</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.title}>{props.info.title}</Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => props.hasVoted === false && props.onVote('firstOption', props.info.id)} style={[styles.card, {backgroundColor: '#71B6F0'}]}>
          {props.hasVoted === true
            ? <Results
                info={props.info.firstOption}
                totalVotes={props.info.firstOption.votes + props.info.secondOption.votes} />
            : <Text style={styles.cardText}>{props.info.firstOption.option}</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.hasVoted === false && props.onVote('secondOption', props.info.id)} style={[styles.card, {backgroundColor: '#E71575'}]}>
          {props.hasVoted === true
            ? <Results
                info={props.info.secondOption}
                totalVotes={props.info.firstOption.votes + props.info.secondOption.votes} />
            : <Text style={styles.cardText}>{props.info.secondOption.option}</Text>}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navContainer: {
    justifyContent: 'center',
  },
  navText: {
    fontSize: 15,
  },
  innerContainer: {
    padding: 30,
    paddingTop: 0,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#2d2d2d',
    margin: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
  },
  cardText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  option: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'center',
  },
  voteInfo: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
})
