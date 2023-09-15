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
        <stencil-route-link url="/">
          Home
        </stencil-route-link>
        <stencil-route-link url="/packages">
          Packages
        </stencil-route-link>
        <stencil-route-link url="/contact">
          Contact Us
        </stencil-route-link>
      </div>
    );
  }
}
