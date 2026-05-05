"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const images = [
    // 222013 - North Moore
    '/images/project_gallery/222013-North Moore.jpeg',
    '/images/project_gallery/222013-North Moore1.jpeg',
    '/images/project_gallery/222013-North Moore2.jpeg',
    '/images/project_gallery/222013-North Moore3.jpeg',
    '/images/project_gallery/222013-North Moore4.jpeg',
    '/images/project_gallery/222013-North Moore5.jpeg',
    // 223011 - Crystal Metro Entrance
    '/images/project_gallery/223011-Crystal Metro Entrance.jpeg',
    '/images/project_gallery/223011-Topping F.jpeg',
    '/images/project_gallery/223011-Topping F1.jpeg',
    '/images/project_gallery/223011-Topping G.jpeg',
    // 224001 - Mars Arcadia
    '/images/project_gallery/224001-Mars Arcadia.jpeg',
    '/images/project_gallery/224001-Mars Arcadia1.jpeg',
    '/images/project_gallery/224001-Mars Arcadia2.jpeg',
    // 224002 - OMVHS
    '/images/project_gallery/224002-OMVHS.jpeg',
    '/images/project_gallery/224002-OMVHS1.jpeg',
    // 224004 - U-Market
    '/images/project_gallery/224004-U-Market.jpeg',
    '/images/project_gallery/224004-U-Market1.jpeg',
    '/images/project_gallery/224004-U-Market2.jpeg',
    '/images/project_gallery/224004-U-Market3.jpeg',
    // 224006 - Inova
    '/images/project_gallery/224006-Inova.jpeg',
    '/images/project_gallery/224006-Inova1.jpeg',
    '/images/project_gallery/224006-Inova2.jpeg',
    // 224009 - 1250 Maryland Ave
    '/images/project_gallery/224009-1250 Maryland Ave.jpeg',
    '/images/project_gallery/224009-1250 Maryland Ave-1.jpeg',
    '/images/project_gallery/224009-1250 Maryland Ave-2.jpeg',
    '/images/project_gallery/224009-1250 Maryland Ave3.jpeg',
    // 224010 - Malcolm
    '/images/project_gallery/224010-Malcolm2.jpeg',
    // 224011 - Templeton
    '/images/project_gallery/224011_TempIeton.jpeg',
    '/images/project_gallery/224011_TempIeton1.jpeg',
    '/images/project_gallery/224011_TempIeton2.jpeg',
    // Misc
    '/images/project_gallery/B4DD675F-05CF-4FB9-97D4-8098E75EAF0A.jpeg',
  ];
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const formatName = (src: string) => {
    const name = src.split('/').pop()?.split('.')[0] || '';
    return name.replace(/[-_]/g, ' ');
  };

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
                alt={formatName(src)}
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
