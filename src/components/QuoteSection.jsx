"use client";
import { useEffect, useRef, useState } from "react";
import "./QuoteSection.css";

export default function QuoteSection() {
  const pRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (pRef.current) {
      observer.observe(pRef.current);
    }

    return () => {
      if (pRef.current) observer.unobserve(pRef.current);
    };
  }, []);

  return (
    <section className="QuoteSection">
      <div className="QuoteElements">
        <h4>Special Quote</h4>
        <p ref={pRef} className={isVisible ? "visible" : ""}>
          Life is like a lens—focus on the moments, capture the beauty, and let
          the light in.
        </p>
        <div className="DavidImage">
          <img src="/images/DavidImage.jpg" />
          <div className="DavidName">David Gonzalez</div>
          <div className="Signature">David.G</div>
        </div>
      </div>
    </section>
  );
}
