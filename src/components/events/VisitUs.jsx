import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VisitUs.css';
import visit_img from '../../assets/visit.jpeg';


// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const VisitUs = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Scroll-driven animation for the background image
    const animation = gsap.to(bgRef.current, {
      scale: 1.15, // Adjust this value to control how much it zooms
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Starts when the top of the container hits the top of the viewport
        end: "bottom top", // Ends when the bottom of the container hits the top of the viewport
        scrub: 1, // Smooth scrubbing effect
      }
    });

    // Cleanup on unmount
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="hero-container" ref={containerRef}>
      
      
      <div 
        className="hero-background" 
        ref={bgRef}
         
      >
        <img src={visit_img} alt="" />
      </div>

      {/* Dark overlay to ensure text readability */}
      <div className="hero-overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        
        {/* Top Text Block */}
        <div className="hero-text-block">
          <div className="hero-title-row">
            <h1>Come Visit Us</h1>
           
            <div className="bike-logo-placeholder">
               <span role="img" aria-label="bike and coffee"> </span>
            </div>
          </div>
          <p>
            We have two convenient Harrisburg locations, each with its own
            flavor, both serving tasty coffee and chill vibes every day!
          </p>
        </div>

        {/* Bottom Buttons */}
        <div className="hero-actions">
          <button className="btn-green-location">GO TO ARERA COLONY LOCATION</button>
      
        </div>
        
      </div>
    </div>
  );
};

export default VisitUs;
