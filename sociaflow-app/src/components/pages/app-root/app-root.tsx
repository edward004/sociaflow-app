import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <stencil-route-link url="/">
            <img src="../../../assets/images/sociaflow-logo.png" alt="sociaflow" />
          </stencil-route-link>
          <div class="header-right">
            <div class="nav-links">
              <a href="/#packages-section">Packages</a>
              <a href="/#why-sociaflow-section">Why sociaflow?</a>
              <a href="/#about-us-section">About us</a>
            </div>
            <profile-menu />
          </div>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route url="/login" component='login-page' />
              <stencil-route url="/about-us" component='about-us-page' />
              <stencil-route url="/packages" component='packages-page' />
              <stencil-route url="/contact-us" component='contact-us-page' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
