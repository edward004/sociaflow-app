import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'profile-menu',
  styleUrl: 'profile-menu.scss',
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
    const isLoggedIn = true;
    const userName = "John Doe";

    return (
      <div>
        {isLoggedIn ? (
          <div class="profile-menu-logged-in">
            <span><img src="../../assets/images/profile-user.png" alt="user profile" /></span>
            <span class="profile-menu-name">{userName}</span>
          </div>
        ) : (
          <stencil-route-link url="/login">
            <div class="profile-menu-logged-out">
                <span><img src="../../assets/images/profile-user.png" alt="user profile" /></span>
                <span class="profile-menu-name">Sign In</span>
            </div>
          </stencil-route-link>
        )}
      </div>
    );
  }
}
