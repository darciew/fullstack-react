/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withRouter } from 'react-router';

import TopBar from './TopBar';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='ui grid'>
        <TopBar />
        <div className='ui grid container'>
          { React.cloneElement(this.props.children) }
        </div>
      </div>
    );
  }
}

export default withRouter(App);
