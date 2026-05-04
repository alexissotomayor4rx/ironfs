"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const images = Array.from({ length: 11 }, (_, i) => `http://ironfs.com/images/galleries/thumbs/gallery${i + 1}.png`);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'transparent' }}>
      <div className="container section">
        <h1 className="section-title">Project <span>Gallery</span></h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px' }}>
          A selection of our recent structural steel, staircase, and railing installations. Click on any image to expand.
        </p>
        
        <div className="masonry-grid" style={{ gridAutoRows: '300px' }}>
          {images.map((src, index) => (
            <div 
              key={index} 
              className="masonry-item" 
              style={{ position: 'relative', background: 'var(--color-surface)', cursor: 'pointer' }}
              onClick={() => setSelectedImage(src)}
            >
              <Image 
                src={src} 
                alt={`Project ${index + 1}`}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="hover-zoom"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div style={{ position: 'relative', width: '95vw', height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '0px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '3rem',
                cursor: 'pointer',
                zIndex: 10,
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              &times;
            </button>
            <Image 
              src={selectedImage} 
              alt="Expanded view" 
              fill
              style={{ objectFit: 'contain', display: 'block' }} 
            />
          </div>
        </div>
      )}

      {/* Inline styles for hover zoom */}
      <style dangerouslySetInnerHTML={{__html: `
        .hover-zoom:hover {
          transform: scale(1.05);
        }
      `}} />
    </div>
  );
}
