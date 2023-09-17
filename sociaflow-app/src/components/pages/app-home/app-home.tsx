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
          <div class="content-section">
            <div class="left-content">
              <h2>Let us boost your online presence while you focus on your business</h2>
              <stencil-route-link url="/contact-us">
                <button class="contact-us-button">Contact us today!</button>
              </stencil-route-link>
            </div>
            <div class="right-content">
              <p>
                Welcome to Sociaflow! We are a passionate team of digital experts dedicated to empowering businesses by taking their online presence to new heights. With our expertise in social media management, graphic design, web design, photography, SEO (Search Engine Optimisation), and even coding. We provide a one-stop solution to all your digital needs.
              </p>
              <p>
                We understand the unique challenges that small businesses face in today's competitive online landscape. That's why we've tailored our services to be both affordable and effective, ensuring that you can focus on what you do best – running your business – while we handle your digital presence.
              </p>
              <p>
                Our mission is to help small businesses succeed online without breaking the bank. We pride ourselves on delivering exceptional customer service and personalised solutions that drive results. Whether it's creating engaging social media content, designing eye-catching graphics, or crafting the perfect website, our team is committed to making your brand stand out from the crowd.
              </p>
            </div>
          </div>
        </div>

        <div id="packages-section">
        </div>

        <div id="about-us-section">
        </div>



      </div>
    );
  }
}
