import { Component } from 'react'
import LoginForm from './LoginForm'

export default class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
      }
    

  render() {

    return (
        this.state.clicked ? <LoginForm loginHandler={this.props.loginHandler}/> : <button onClick={() => this.setState({ clicked: true })}>Log in</button>
    )
  }
}