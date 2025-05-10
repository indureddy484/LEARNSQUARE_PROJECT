
import React from 'react';
import './HowWeRateSection.css'; // Optional: add styling here if needed

const HowWeRateSec = () => {
  return (
    <section className="how-we-rate-products content-max-width">
      <h2 className="tac">
        Breaking down how<br />we rate products
      </h2>

      <div className="how-we-rate-content-wrapper grid">
        <div className="how-we-rate-block flex">
          <img
            src="https://static.ewg.org/skindeep/img/how-we-rate-01.jpg"
            alt="Review products"
            loading="lazy"
          />
          <h4 className="how-we-rate-title">Review products</h4>
          <p>
          We rate products based on ingredient safety and skin compatibility—clear, research-based, and unbiased.
          </p>
        </div>

        <div className="how-we-rate-block flex">
          <img
            src="https://static.ewg.org/skindeep/img/how-we-rate-02.jpg"
            alt="Evaluate ingredients"
            loading="lazy"
          />
          <h4 className="how-we-rate-title">Evaluate ingredients</h4>
          <p>
            Information is culled from ingredient labels and from the scientific
            and industry literature on personal care products.
          </p>
        </div>

        <div className="how-we-rate-block flex">
          <img
            src="https://static.ewg.org/skindeep/img/how-we-rate-03.jpg"
            alt="Determine product scores"
            loading="lazy"
          />
          <h4 className="how-we-rate-title">Determine product scores</h4>
          <p>
            Each product is rated on factors calculated from nearly 60 integrated
            toxicity, regulatory, and study availability databases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeRateSec;
