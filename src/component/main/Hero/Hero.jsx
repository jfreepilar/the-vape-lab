import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className="container text-center py-5">
      <div className="row mb-4">
        <header className="col">
          <h1 className="display-1 fw-bold">EMAIL & SMS EXPERTS FOR</h1>
          <h2 className="display-2 fw-bold">VAPE BRANDS</h2>
        </header>
      </div>
      <div className="row mb-4">
        <div className="col">
          <p>
            We specialize in crafting compliant, results-driven email and SMS campaigns specifically for cannabis brands. 
            We help you overcome social media restrictions, banned substance regulations, and email provider limitations. 
            Boost your brand's revenue, engage your customers, and turn your email subscribers into loyal customers.
          </p>
        </div>  
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center gap-3">
          <button className={styles.buttonIncreaseRevenue}
                  aria-label="Learn how to increase revenue">Increase Revenue</button>
          <button className={styles.buttonHowItWorks}
                  aria-label="Learn how it works">How It Works</button>
        </div>
      </div>
    </section>
  );
}

