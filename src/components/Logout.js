import { Component } from 'react';
import {hashHistory} from 'react-router';

export default class Logout extends Component {

  componentWillMount() {
    localStorage.removeItem('auth-token');
    hashHistory.push('/');
  }

  render() {
    return null;
  }
}
