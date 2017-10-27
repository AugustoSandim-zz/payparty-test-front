import React, { Component } from 'react';

export default class List extends Component {

  constructor(props) {
    super(props);

    this.state = { items: [] }
    this.login = this.props.login;
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/lists')
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao autenticar-se!')
      }
    })
    .then(items => {
      this.setState({ items: items })
    })
    .catch(error => {
      this.setState({ msg : error.message })
    })
  }

  render() {
    return(
      <div>
        <span>To Do</span>

        <div>
          <form onSubmit={ this.envia.bind(this) }>
            <input type="text" ref={ (input) => this.email = input }/>
            <input type="submit" value="login"/>
          </form>
        </div>
        <ul>

        {
          this.state.items.map(item => {
            return(
              <li className="item" key={ item.id }>
                <a>{ item.id } </a> { item.task }
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}
