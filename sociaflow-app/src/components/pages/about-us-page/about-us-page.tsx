import { Component, h } from '@stencil/core';

@Component({
  tag: 'about-us-page',
  styleUrl: 'about-us-page.scss'
})
export class AboutUsPage {
  render() {
    return (
      <div class="about-us">

        <section class="hero">
          <h1>About Sociaflow</h1>
          <p>Discover our journey, our team, and our vision.</p>
        </section>

        <section class="our-story">
          <h2>Our Story</h2>
          <p>[Insert story here]</p>
        </section>

        <section class="team">
          <h2>Meet the Team</h2>
          {/* Repeat for each team member */}
          <div class="team-member">
            <img src="path_to_image" alt="Team member name"/>
            <h3>Team Member Name</h3>
            <p>Role or title</p>
          </div>
        </section>

        <section class="mission-vision">
          <h2>Our Mission & Vision</h2>
          <p>[Insert mission & vision]</p>
        </section>

        <section class="testimonials">
          <h2>What People Say</h2>
          {/* Repeat for each testimonial */}
          <blockquote>
            <p>Testimonial content...</p>
            <cite>Client Name</cite>
          </blockquote>
        </section>

        <section class="cta">
          <h2>Join Us on Our Journey</h2>
          <p>Interested in learning more or working with us? Contact us today.</p>
          <button>Contact Us</button>
        </section>

      </div>
    );
  }
}
