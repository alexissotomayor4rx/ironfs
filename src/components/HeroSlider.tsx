"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./heroslider.css";

const images = [
  "/images/project_gallery/224011-Templeton4.jpeg",
  "/images/project_gallery/224009-1250 Maryland Ave-2.jpeg",
  "/images/project_gallery/223011-Crystal Metro Entrance.jpeg",
  "/images/project_gallery/224006-Inova.jpeg",
  "/images/project_gallery/222013-North Moore1.jpeg",
  "/images/project_gallery/224001-Mars Arcadia.jpeg",
  "/images/project_gallery/224004-U-Market2.jpeg",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider-container">
      {images.map((src, index) => {
        let position = "next";
        if (index === currentIndex) {
          position = "active";
        } else if (
          index === currentIndex - 1 ||
          (currentIndex === 0 && index === images.length - 1)
        ) {
          position = "prev";
        }

        return (
          <div key={src} className={`hero-slide ${position}`}>
            <Image 
              src={src} 
              alt={`Hero Background ${index + 1}`} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority={index === 0}
            />
          </div>
        );
      })}
      {/* Overlay to ensure text readability on the left */}
      <div className="hero-overlay"></div>
    </div>
  );
}
