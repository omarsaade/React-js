import React, { Component } from 'react';
import Header from './Header';
import Text from './Text';
import Social from './Social';
import Pic from './Pic';




class App extends Component {
  render() {
    return (
      // jsx
      <div className='container' >
        <Header />
        <Text />
        <Social />
        <Pic />
      </div>
    );
  }

}

export default App;
