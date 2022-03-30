import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../componentes/Loading';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      isLoading: false,
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

    createUser({ name: inputName });
  };

  render() {
    const { inputName, isLoading } = this.state;
    const { onInputChange, clickButton } = this;
    const minCharacters = 3;
    const disabledButton = inputName.length < minCharacters;

    return (
      <div data-testid="page-login">

        { isLoading && <Loading />}
        <form>
          <input
            data-testid="login-name-input"
            name="inputName"
            type="text"
            value={ inputName }
            onChange={ onInputChange }
          />

          <Link to="/search">
            <button
              data-testid="login-submit-button"
              disabled={ disabledButton }
              type="submit"
              onClick={ clickButton }
            >
              Entrar
            </button>

          </Link>
        </form>
      </div>
    );
  }
}
