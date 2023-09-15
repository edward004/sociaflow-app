import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="container">
        <img src="../../../assets/images/home-page-container.png" alt="Description of Image" />
        <div class="overlay-text">
          <h1><span class="socia">socia</span><span class="flow">flow</span></h1>
          <p>Let us boost your online presence while you focus on your business</p>
          <stencil-route-link url="/about-us/stencil">
              <button class="about-us-button">About Us</button>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
