import React, { Component } from 'react';
import { Container, Header, Button, Grid, Segment} from 'semantic-ui-react';

class Home extends Component{

  render(){
    return (

        <Segment inverted style={{ padding: '8em 0em', marginTop: '7em' }} vertical>

          <Header 
            as='h1'
            content='FLOW-DOCS'
            inverted
          />
          <Header
            as='h2'
            content='Improve collaboration with your team'
            inverted
          />
          <Header
            as='h2'
            content='Showcase the inner workings of your app for your end users'
            inverted
          />
          <Button primary size='huge' onClick={() => {this.props.history.push('/create')}}>Create a flow</Button>
          <Button primary size='huge'>Watch the flow</Button>
        </Segment>
);
  }
}

export default Home;