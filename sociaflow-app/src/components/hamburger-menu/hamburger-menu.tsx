import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'hamburger-menu',
  styleUrl: 'hamburger-menu.scss',
  shadow: true
})
export class MenuBar {
  @State() showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  render() {
    return (
      <div>
        <div class="menu-button" onClick={() => this.toggleMenu()}>
          ☰ Menu
        </div>
        {this.showMenu && (
          <div class={`menu ${this.showMenu ? 'show' : ''}`}>
            <stencil-route-link url="/">
              Home
            </stencil-route-link>
            <stencil-route-link url="/packages">
              Packages
            </stencil-route-link>
            <stencil-route-link url="/about-us">
              About Us
            </stencil-route-link>
            <stencil-route-link url="/contact-us">
              Contact Us
            </stencil-route-link>
          </div>
        )}
      </div>
    );
  }
}
