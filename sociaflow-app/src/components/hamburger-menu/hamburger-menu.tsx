import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'hamburger-menu',
  styleUrl: 'hamburger-menu.scss',
  shadow: true
})
export class MenuBar {
  @State() showMenu = false;
  menuRef: HTMLElement;

  componentDidLoad() {
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  handleMouseMove(event: MouseEvent) {
    if (!this.menuRef) return;

    const rect = this.menuRef.getBoundingClientRect();
    const buffer = 50; // distance in pixels to consider "too far"

    if (
      event.clientX < rect.left - buffer ||
      event.clientX > rect.right + buffer ||
      event.clientY < rect.top - buffer ||
      event.clientY > rect.bottom + buffer
    ) {
      this.showMenu = false;
    }
  }

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
          <div class={`menu ${this.showMenu ? 'show' : ''}`} ref={(el) => this.menuRef = el as HTMLElement}>
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
