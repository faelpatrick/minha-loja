import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="home-page">
        <header>
          <h1>Welcome to Minha Loja</h1>
          <p>Your Destination for Quality and Personalized Shopping Experience</p>
        </header>

        <section className="introduction">
          <p>
            At Minha Loja, we believe in starting small but aiming high. As a budding retail haven, we are committed to offering our customers top-notch products and an unparalleled level of
            personalized service. We understand that your needs are unique, and that's why our approach to customer service is as individual as you are.
          </p>
        </section>

        <section className="curated-selections">
          <h2>Curated Selections</h2>
          <p>
            Quality matters. That’s why every item on our shelves has been hand-picked to ensure you get products that not only meet but exceed your expectations. Whether you're in search for the
            latest gadgets, must-read books, or chic apparel, we've got you covered.
          </p>
        </section>

        <section className="personal-touch">
          <h2>Personal Touch</h2>
          <p>
            Shopping is more than just a transaction; it's about building relationships. Our dedicated team takes the time to understand what you're looking for, providing tailored recommendations and
            assistance every step of the way.
          </p>
        </section>

        <section className="join-our-journey">
          <h2>Join Our Journey</h2>
          <p>We're just getting started, and we'd love for you to be a part of our growth. Visit us, explore our selections, and let us make your shopping experience unforgettable.</p>
          <p>We're more than just a store - we're a community. Welcome to Minha Loja.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
