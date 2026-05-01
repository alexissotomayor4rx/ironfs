import Image from 'next/image';

export default function About() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'transparent' }}>
      <div className="container section">
        <h1 className="section-title">About <span>Us</span></h1>
        
        <div style={{ background: '#FFFFFF', padding: '3rem', border: '1px solid var(--color-border)', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', height: '400px' }}>
            {/* Using a generic placeholder grid of images to replicate the collage in the screenshot */}
            <div className="masonry-grid" style={{ gridAutoRows: '190px' }}>
              <div className="masonry-item" style={{ position: 'relative' }}>
                <Image src="/gallery_frame.png" alt="Fabrication 1" fill style={{ objectFit: 'cover', transform: 'rotate(-5deg)', border: '4px solid #fff', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
              </div>
              <div className="masonry-item" style={{ position: 'relative' }}>
                <Image src="/gallery_stairs.png" alt="Fabrication 2" fill style={{ objectFit: 'cover', transform: 'rotate(3deg)', border: '4px solid #fff', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
              </div>
              <div className="masonry-item" style={{ position: 'relative' }}>
                <Image src="/gallery_rails.png" alt="Fabrication 3" fill style={{ objectFit: 'cover', transform: 'rotate(-2deg)', border: '4px solid #fff', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
              </div>
              <div className="masonry-item" style={{ position: 'relative' }}>
                <Image src="/hero_new.png" alt="Fabrication 4" fill style={{ objectFit: 'cover', transform: 'rotate(4deg)', border: '4px solid #fff', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} />
              </div>
            </div>
          </div>

          <div>
            <p style={{ color: 'var(--color-charcoal)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Iron Fabrication Services Inc. is a leading fabricator and supplier of all types of steel used in many major construction projects such as large scale commercial and residential buildings. It was founded by a group of professionals in the construction market. Our quality is visible throughout the Metropolitan area of Washington D.C., Virginia and Maryland and can be seen on many current construction projects.
            </p>
            <p style={{ color: 'var(--color-charcoal)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We offer a wide range of products including prefabricated stairs, rails, ladders, catwalks, grating structures. We are as well specialized in structural steel fabrication and erection including columns, beams, deck and steel joists. We cover all the needs to properly manage the construction project including pricing, project management and in house engineering design, shop drawings, and detailing. Our commitment to every job means we take an engineering approach, instituting systems and technology that ensure quality and cost efficiency. Attention to coordination, control and scheduling helps minimize waste and maximize output.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
