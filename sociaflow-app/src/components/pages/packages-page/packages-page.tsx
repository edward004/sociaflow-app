import { Component, h } from '@stencil/core';

@Component({
  tag: 'packages-page',
  styleUrl: 'packages-page.scss',
  shadow: true,
})
export class PackagesPage {

  render() {
    return (
      <div class='packages-container'>
        <h1>Our Packages</h1>

        <div class='package'>
          <h2>Essential</h2>
          <ul>
            <li>Instagram Posts – 2 per week</li>
            <li>Instagram Stories – 4 per week</li>
            <li>Instagram Account Management</li>
            <li>Facebook Posts – 2 per week</li>
            <li>Facebook Stories – 4 per week</li>
            <li>Facebook Page Management</li>
            <li>Google Posts – 1 per week</li>
            <li>Google MyBusiness Management</li>
          </ul>
          <button>Contact Us for Free Consultation</button>
        </div>

        <div class='package'>
          <h2>Advanced</h2>
          <ul>
            <li>Instagram Posts – 4 per week</li>
            <li>Instagram Stories – 7 per week</li>
            <li>Instagram Account Management</li>
            <li>Facebook Posts – 4 per week</li>
            <li>Facebook Stories – 7 per week</li>
            <li>Facebook Page Management</li>
            <li>Google Posts – 2 per week</li>
            <li>Google MyBusiness Management</li>
            <li>Website Support And Management</li>
          </ul>
          <button>Contact Us for Free Consultation</button>
        </div>

        <div class='package'>
          <h2>Premium</h2>
          <ul>
            <li>Instagram Posts – 5 per week</li>
            <li>Instagram Stories – 9 slides per week</li>
            <li>Instagram Comment Management</li>
            <li>Facebook Posts – 5 per week</li>
            <li>Facebook Stories – 9 slides per week</li>
            <li>Facebook Page Management</li>
            <li>Google Posts – 3 per week</li>
            <li>Google SEO Promotion</li>
            <li>Google MyBusiness Management</li>
            <li>Website Management/Development</li>
            <li>Advertising</li>
          </ul>
          <button>Contact Us for Free Consultation</button>
        </div>

      </div>
    );
  }
}
