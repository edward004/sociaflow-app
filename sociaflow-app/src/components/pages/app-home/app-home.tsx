import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div>
        <div class="container">
          <img src="../../../assets/images/home-page-container.png" alt="Description of Image" />
          <div class="overlay-text">
            <h1><span class="socia">socia</span><span class="flow">flow</span></h1>
            <h2>Let us boost your online presence while you focus on your business</h2>
            <stencil-route-link url="/about-us">
              <button class="about-us-button">About Us</button>
            </stencil-route-link>
          </div>
        </div>

        <div id="why-sociaflow-section">
          <why-sociaflow-page/>
        </div>

        <div id="packages-section">
          <packages-page/>
        </div>

        <div id="contact-us-section">
          <contact-us-page/>
        </div>



      </div>
    );
  }
}
