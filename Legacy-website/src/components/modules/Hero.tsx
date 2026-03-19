import React from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../assets/hero-main.png'; // Assuming your asset location

const Hero = () => {
  return (
    /* HERO WRAPPER: Full-width outer section */
    <section className={styles.heroWrapper}>
      
      {/* HERO CONTAINER: 1200px centered content box */}
      <div className={styles.heroContainer}>
        
        {/* TEXT CONTAINER ON LEFT */}
        <div className={styles.textContainerLeft}>
          
          {/* Text-copywriting container */}
          <div className={styles.textCopywriting}>
            <h1 className={styles.textLine1}>Simple EV Chargers</h1>
            <h2 className={styles.textLine2}>Just Scan & Charge</h2>
            <p className={styles.textLine3}>Live life on-the-go at 100%</p>
          </div>

          {/* Button container inside text container */}
          <div className={styles.buttonContainer}>
            {/* Button 01 */}
            <button className={styles.heroButton}>
              EXPLORE
            </button>
            
            {/* Button 02 */}
            <button className={styles.heroButton}>
              GET CHARGING GUIDE
            </button>
          </div>
        </div>

        {/* IMAGE CONTAINER ON RIGHT */}
        <div 
          className={styles.imageContainerRight} 
          style={{ backgroundImage: `url(${HeroImage})` }}
          role="img"
          aria-label="Modern EV Charger Illustration"
        />

      </div>
    </section>
  );
};

export default Hero;