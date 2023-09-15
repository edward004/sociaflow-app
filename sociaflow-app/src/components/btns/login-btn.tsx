import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'login-btn',
  styleUrl: 'login-btn.scss',
  shadow: true
})
export class LoginButton {
  @Event() loginClicked: EventEmitter;

  handleClick() {
    // Emit the custom event
    this.loginClicked.emit();

    // For demo purposes, you can also log to the console.
    console.log('Login button clicked!');
  }

  render() {
    return (
        <stencil-route-link url="/login">
            <button>Login</button>
        </stencil-route-link>
    );
  }
}
