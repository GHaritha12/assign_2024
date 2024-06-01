import React from 'react';
import fs from 'fs';
import path from 'path';

interface CTAButton {
  text: string;
  link: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  name: string;
  feedback: string;
  avatar: string;
}

interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
}

interface Data {
  hero: {
    headline: string;
    subheadline: string;
    ctaButtons: CTAButton[];
  };
  features: Feature[];
  testimonials: Testimonial[];
  pricing: PricingPlan[];
}

const Home = ({ data }: { data: Data }) => {
  return (
    <div>
      <section className="hero-section">
        <h1 className="headline">{data.hero.headline}</h1>
        <p className="subheadline">{data.hero.subheadline}</p>
        <div>
          {data.hero.ctaButtons.map((button, index) => (
            <a key={index} className="cta-button" href={button.link}>
              {button.text}
            </a>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        {data.features.map((feature, index) => (
          <div key={index} className="feature">
            <img src={feature.icon} alt={feature.title} />
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        {data.testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.avatar} alt={testimonial.name} />
            <div className="testimonial-content">
              <p>"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </section>

      <section className="pricing-section">
        <h2>Pricing</h2>
        {data.pricing.map((plan, index) => (
          <div key={index} className="pricing-plan">
            <h3 className="pricing-plan-title">{plan.plan}</h3>
            <p className="pricing-plan-price">{plan.price}</p>
            <ul className="pricing-plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form id="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data.json');
  const data: Data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: {
      data
    }
  };
};

export default Home;
