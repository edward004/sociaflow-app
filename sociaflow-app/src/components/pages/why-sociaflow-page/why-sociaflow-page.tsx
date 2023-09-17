import { Component, h } from '@stencil/core';

@Component({
  tag: 'why-sociaflow-page',
  styleUrl: 'why-sociaflow-page.scss',
  shadow: true,
})
export class WhySociaflowPage {

  render() {
    return (
      <div>
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
        <div class="why-sociaflow-page">
          <h1>Why choose sociaflow?</h1>
          <h2>tailored to your business at an unbeatable price</h2>
          <div class="bullet-points">
            <div>
              <h1>
                Stay competitive in the digital marketplace
              </h1>
              <p>
                By utilising our services, you're giving your business the best chance to compete with larger companies that have more resources at their disposal. We level the playing field by providing you with affordable, high-quality digital solutions that make your business stand out online.
              </p>
            </div>
            <div>
              <h1>
                Increase brand awareness and credibility
              </h1>
              <p>
                Our expert team helps you establish a consistent and professional brand image across your website, social media, and marketing materials. This not only enhances your brand's visibility but also builds trust and credibility with potential customers, making them more likely to choose your business over the competition.
              </p>
            </div>
            <div>
              <h1>
                Have time and resources
              </h1>
              <p>
                Managing your online presence can be time-consuming and overwhelming, especially when you're juggling the day-to-day tasks of running a business. By outsourcing your digital needs to our team, you can focus on what you do best while we handle the rest, saving you valuable time and resources.
              </p>
            </div>
            <div>
              <h1>
                Drive customer engagement and retention
              </h1>
              <p>
                Our social media management services ensure that your business stays connected with your audience through consistent, engaging content. By actively engaging with your customers and maintaining a strong online presence, you can foster brand loyalty and increase customer retention.
              </p>
            </div>
            <div>
              <h1>
                Boost sales and revenue
              </h1>
              <p>
                Our tailored approach to digital marketing, including website design, social media advertising, and email marketing, helps drive traffic to your website and convert visitors into paying customers. By investing in our services, you're making a strategic decision to grow your business and boost your bottom line.
              </p>
            </div>
            <div>
              <h1>
                Approachable and friendly small business service
              </h1>
              <p>
                As a fellow small business, we understand the importance of building genuine connections and offering personalised attention to our clients. Our friendly, approachable team is always ready to listen, collaborate, and find creative solutions to your digital challenges. When you work with sociaflow, you're not just a number – you're part of our extended family, and we're committed to helping your business flourish.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
