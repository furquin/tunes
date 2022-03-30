import React from 'react';
import { HashRouter } from 'react-router-dom';
import Pages from './Pages/Pages';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Pages />
      </HashRouter>
    );
  }
}

export default App;
