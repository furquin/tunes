import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from '../componentes/Loading';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      isLoading: false,
      redirect: false,
    };
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  clickButton = () => {
    const { inputName } = this.state;
    this.setState({
      isLoading: true,
    });

    createUser({ name: inputName })
      .then(() => this.setState({ redirect: true }));
  };

  render() {
    const { inputName, isLoading, redirect } = this.state;
    const { onInputChange, clickButton } = this;
    const minCharacters = 3;
    const disabledButton = inputName.length < minCharacters;

    return (
      <div data-testid="page-login">
        <form>
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
            onClick={ clickButton }
          >
            Entrar
          </button>
        </form>

        { isLoading && <Loading />}
        { redirect && <Redirect to="/search" />}

      </div>
    );
  }
}
