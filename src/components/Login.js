import React, { Component } from 'react';
import {hashHistory} from 'react-router';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = { msg : this.props.location.query.msg }
  }

  envia(event) {
    event.preventDefault();

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({email: this.email.value}),
      headers: new Headers({
        'Content-type':'application/json'
      })
    }

    fetch('http://localhost:3000/api/v1/login/auth', requestInfo)
      .then(response => {
        if(response.ok) {
          return response.text();
        } else {
          throw new Error('Erro ao autenticar-se!')
        }
      })
      .then(token => {
        console.log(token)
        localStorage.setItem('auth-token', token);
        hashHistory.push('/list')
      })
      .catch(error => {
        this.setState({ msg : error.message })
      })
  }

  render() {
    return(
      <div className="login-box">
        <h1 className="header-logo">PayParty</h1>
        <span>{ this.state.msg }</span>
        <form onSubmit={ this.envia.bind(this) }>
          <input type="text" ref={ (input) => this.email = input }/>
          <input type="submit" value="login"/>
        </form>
      </div>
    );
  }
}
