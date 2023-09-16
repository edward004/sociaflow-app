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
          <hamburger-menu  class="hamburger-menu"/>
          <h1><span class='socia'>socia</span><span class='flow'>flow</span></h1>
          <login-btn />
        </header>



        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route url="/login" component='login-page' />
              <stencil-route url="/about-us" component='about-us-page' />
              <stencil-route url="/packages" component='packages-page' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
