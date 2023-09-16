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
        <button onClick={() => this.toggleMenu()}>☰ Menu</button>
        {this.showMenu && (
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
        )}
      </div>
    );
  }
}
