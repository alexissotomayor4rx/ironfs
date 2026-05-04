import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <HeroSlider />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>Baltimore, MD</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.05, marginBottom: '2rem', color: 'var(--color-charcoal)' }}>
              PRECISION IN <br />
              <span style={{ color: 'var(--color-steel-blue)' }}>EVERY BEAM.</span><br />
              QUALITY IN<br />
              <span style={{ color: 'var(--color-primary)' }}>EVERY WELD.</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', fontWeight: 400 }}>
              Delivering high-end structural steel and iron fabrication for commercial and industrial projects across the Mid-Atlantic.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Request a Quote</a>
              <a href="/projects" className="btn btn-outline" style={{ padding: '1.25rem 3rem' }}>View Gallery</a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="services" className="section container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="section-title" style={{ margin: 0 }}>The Standard of <span style={{ color: 'var(--color-primary)' }}>Excellence</span></h2>
          <p style={{ marginTop: '1.5rem', color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
            Reliable, heavy-duty, and tech-forward. We merge traditional craftsmanship with modern engineering principles.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Top Row: 3 Hexagons */}
          <div className="hex-row" style={{ marginBottom: '-60px' }}>
            <div className="hex-wrapper">
              <div className="hex-inner">
                <Image src="/gallery_frame.png" alt="Structural Steel Fabrication" fill className="hex-bg" style={{objectFit: 'cover'}} />
                <div className="hex-overlay"></div>
                <div className="hex-content">Structural Steel<br />Fabrication</div>
              </div>
            </div>
            <div className="hex-wrapper">
              <div className="hex-inner">
                <Image src="/gallery_stairs.png" alt="Engineering & Detailing" fill className="hex-bg" style={{objectFit: 'cover'}} />
                <div className="hex-overlay"></div>
                <div className="hex-content">Engineering &<br />Detailing</div>
              </div>
            </div>
            <div className="hex-wrapper">
              <div className="hex-inner">
                <Image src="/hero_new.png" alt="Steel Erection" fill className="hex-bg" style={{objectFit: 'cover'}} />
                <div className="hex-overlay"></div>
                <div className="hex-content">Steel<br />Erection</div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row: 2 Hexagons */}
          <div className="hex-row">
            <div className="hex-wrapper">
              <div className="hex-inner">
                <Image src="/gallery_rails.png" alt="Prefabricated Stairs & Rails" fill className="hex-bg" style={{objectFit: 'cover'}} />
                <div className="hex-overlay"></div>
                <div className="hex-content">Stairs, Rails &<br />Structures</div>
              </div>
            </div>
            <div className="hex-wrapper">
              <div className="hex-inner">
                <Image src="http://ironfs.com/images/galleries/thumbs/gallery5.png" alt="Project Management" fill className="hex-bg" style={{objectFit: 'cover'}} />
                <div className="hex-overlay"></div>
                <div className="hex-content">Project<br />Management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery - Masonry */}
      <section id="projects" className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2 className="section-title" style={{ margin: 0 }}>Project <span style={{ color: 'var(--color-primary)' }}>Gallery</span></h2>
              <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)', maxWidth: '500px' }}>A selection of our recent structural steel, staircase, and railing installations.</p>
            </div>
            <a href="/projects" style={{ fontWeight: 600, color: 'var(--color-steel-blue)', borderBottom: '2px solid var(--color-primary)', paddingBottom: '4px' }}>View All Work</a>
          </div>

          <div className="masonry-grid">
            {/* Item 1 - Large */}
            <div className="masonry-item large">
              <Image 
                src="/gallery_frame.png" 
                alt="Structural Steel Frame" 
                fill 
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="hover-zoom"
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(28,40,51,0.9), transparent)', color: '#FFF' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Commercial</span>
                <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', color: '#FFF' }}>Structural Framework</h3>
              </div>
            </div>

            {/* Item 2 */}
            <div className="masonry-item">
              <Image 
                src="/gallery_stairs.png" 
                alt="Industrial Stairs" 
                fill 
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="hover-zoom"
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(to top, rgba(28,40,51,0.9), transparent)', color: '#FFF' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Architectural</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem', color: '#FFF' }}>Industrial Stairs</h3>
              </div>
            </div>

            {/* Item 3 */}
            <div className="masonry-item">
              <Image 
                src="/gallery_rails.png" 
                alt="Steel Railings" 
                fill 
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="hover-zoom"
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(to top, rgba(28,40,51,0.9), transparent)', color: '#FFF' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Safety & Design</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem', color: '#FFF' }}>Heavy-Duty Railings</h3>
              </div>
            </div>
            
            {/* Item 4 (Dummy for masonry effect) */}
            <div className="masonry-item" style={{ background: 'var(--color-charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
               <div>
                  <h3 style={{ color: '#FFF', marginBottom: '1rem' }}>Have a Project in Mind?</h3>
                  <a href="#quote" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Let's Talk</a>
               </div>
            </div>

          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section id="quote" className="section container">
        <div style={{ background: 'var(--color-steel-blue)', padding: 'clamp(3rem, 10vw, 6rem) clamp(1.5rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#FFF' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#FFF', marginBottom: '1.5rem' }}>Ready to Build?</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginBottom: '3rem' }}>
            Submit your schematics or talk to one of our engineers today. We provide comprehensive quotes within 48 hours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Request a Quote</a>
            <a href="/contact" className="btn" style={{ background: '#FFF', color: 'var(--color-steel-blue)', padding: '1.25rem 3rem' }}>Contact Sales</a>
          </div>
        </div>
      </section>

      {/* Inline styles for hover zoom */}
      <style dangerouslySetInnerHTML={{__html: `
        .hover-zoom:hover {
          transform: scale(1.05);
        }
      `}} />
    </>
  );
}
