import { Component, h } from '@stencil/core';

@Component({
  tag: 'profile-home',
  styleUrl: 'profile-home.scss',
  shadow: true,
})
export class ProfileHome {

  render() {
    return (
      <div class='profile-home-container'>
        <h1>Welcome to your Dashboard</h1>
      </div>
    );
  }
}
