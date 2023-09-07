import { Component, h } from '@stencil/core';

@Component({
  tag: 'menu-bar',
  styleUrl: 'menu-bar.scss',
  shadow: true
})
export class MenuBar {

  render() {
    return (
      <div class="menu">
        <a href="#">Home</a>
        <a href="#">Packages</a>
        <a href="#">Contact Us</a>
        <a href="#">Login</a>
      </div>
    );
  }
}
