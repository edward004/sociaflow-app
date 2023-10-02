import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {

  isLoggedIn(): boolean {
    // TODO: Implement your logic to check if the user is logged in.
    return false;
  }

  render() {
    const currentURL = window.location.href
    console.log(currentURL)
    if(!this.isLoggedIn && currentURL != "http://localhost:3333/"){
      <stencil-router-redirect url="/login" />
    }

    return (
      <div>
        <header>
          <stencil-route-link url="/">
            <img src="../../../assets/images/sociaflow-logo.png" alt="sociaflow" />
          </stencil-route-link>
          <div class="header-right">
            {!this.isLoggedIn ?
            <div class="nav-links">
              <a href="/#packages-section">Packages</a>
              <a href="/#why-sociaflow-section">Why sociaflow?</a>
              <a href="/#about-us-section">About us</a>
            </div>
            :
            <div class="nav-links">
              <stencil-route-link url="/dashboard">Dashboard</stencil-route-link>
              <stencil-route-link url="/scheduled">Scheduled</stencil-route-link>
              <stencil-route-link url="/upload">Upload</stencil-route-link>
            </div>
            }

            <profile-menu />
          </div>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/about-us" component='about-us-page' />
              <stencil-route url="/packages" component='packages-page' />
              <stencil-route url="/contact-us" component='contact-us-page' />
              <stencil-route url="/login" component='login-page' />
              <stencil-route url="/dashboard" component="dashboard-home" />
              <stencil-route url="/scheduled" component="scheduled-posts" />
              <stencil-route url="/upload" component="upload-page" />

            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
