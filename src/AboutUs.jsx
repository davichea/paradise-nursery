import React from 'react';

export default function AboutUs({ compact = false }) {
  return (
    <section className={compact ? 'about-panel about-compact' : 'about-panel'} aria-labelledby="about-heading">
      <span className="section-kicker">Our story</span>
      <h2 id="about-heading">About Paradise Nursery</h2>
      <p>At Paradise Nursery, we believe every home deserves a little more life. We make it simple to discover beautiful houseplants and feel confident caring for them.</p>
      <p>From tropical statement leaves to low-maintenance favorites and flowering varieties, our curated selection brings the joy of greenery to every space.</p>
      {!compact && (
        <div className="about-highlights">
          <article><h3>Our mission</h3><p>Make plants accessible, enjoyable, and welcoming to beginners and seasoned plant lovers alike.</p></article>
          <article><h3>Our promise</h3><p>Offer thoughtful plant recommendations, transparent prices, and friendly guidance.</p></article>
          <article><h3>Our values</h3><p>Care, sustainability, curiosity, and a love for greener spaces.</p></article>
        </div>
      )}
    </section>
  );
}
