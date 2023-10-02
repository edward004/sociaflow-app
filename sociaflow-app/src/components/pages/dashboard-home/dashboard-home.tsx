import { Component, h } from '@stencil/core';

@Component({
  tag: 'dashboard-home',
  styleUrl: 'dashboard-home.scss',
  shadow: true,
})
export class ProfileHome {

  render() {
    return (

      <div class='dashboard-home-container'>
        <h1>Welcome to your Dashboard</h1>
      </div>
    );
  }
}
