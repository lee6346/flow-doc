import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Search } from 'semantic-ui-react';

const searchLinks = {
  "results": {
    "osd": {
      "name": "osd",
      "results": [
        {
          "title": "Custodian Balances",
          description: '',
          
        }
      ]
    }
  }
}

const Navbar = () => {
  
  return (
    <Menu fixed='top' inverted>


        <Menu.Item as={Link} to='/' header>
          Flow Docs
          
        </Menu.Item>
        
        <Menu.Item as={Link} to='/home' name='Home' />
        <Menu.Item as={Link} to='/create' name='Create' />
        <Menu.Item as={Link} to='/view' name='View' />
        <Menu.Item as={Link} to='/settings' name='Settings' />
        <Menu.Item position='right'>
          <Search></Search>
        </Menu.Item>

  </Menu>
);
};

export default Navbar;