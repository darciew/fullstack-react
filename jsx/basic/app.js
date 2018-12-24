import React from 'react'

class App extends React.Component {
  render() {
    const klass = classnames({
      box: true, // always apply the box class
      alert: this.props.isAlert, // if a prop is set
      severity: this.state.onHighAlert, // with a state
      timed: false // never apply this class
    });
    return (<div className={klass} />)
  }
}

export default App
