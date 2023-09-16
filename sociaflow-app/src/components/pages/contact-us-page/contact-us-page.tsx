import { Component, h } from '@stencil/core';

@Component({
  tag: 'contact-us-page',
  styleUrl: 'contact-us-page.scss',
})
export class ContactUsPage {
  render() {
    return (
      <div class="container">
        <img src="../../../assets/images/home-page-container.png" alt="Description of Image" />
        <div class="overlay-text">
          <h1>
            If you're ready to take your online presence to the next level, we'd love to offer you a free, no-obligation consultation to discuss your specific needs and how we can help you achieve your goals. Get in touch with us today to schedule your complimentary consultation and discover the difference that sociaflow can make for your business.
          </h1>
          <h2>
            Let us boost your online presence while you focus on your business
            drop us an email for consultation now!
          </h2>
          <div>
            <input type="email" placeholder="Enter your email" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
