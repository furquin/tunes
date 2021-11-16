import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
    };
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { inputName } = this.state;
    const { onInputChange } = this;
    const minCharacters = 3;
    const disabledButton = inputName.length < minCharacters;

    return (
      <div data-testid="page-login">
        <input
          data-testid="login-name-input"
          name="inputName"
          type="text"
          value={ inputName }
          onChange={ onInputChange }
        />

        <button
          data-testid="login-submit-button"
          disabled={ disabledButton }
          type="submit"
        >
          Entrar
        </button>
      </div>
    );
  }
}
