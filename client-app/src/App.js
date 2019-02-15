import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './core/Header';
import Home from './home';
class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </Header>
      </div>
    );
  }
}

export default App;
