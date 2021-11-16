import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  render() {
    return (
      <header data-testid="header-component">
        <span
          data-testid="header-user-name"
          onChange= { }
        />
      </header>
    );
  }
}
