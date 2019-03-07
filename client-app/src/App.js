import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './core/Navbar';
import Home from './home';
import FlowBuild from './flow-build';
import FlowWatch from './flow-watch';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/create' component={FlowBuild}/>
              <Route exact path='/view' component={FlowWatch}/>
            </Switch>
        </Container>
          
        
      </div>
    );
  }
}

export default App;
