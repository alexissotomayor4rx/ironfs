import Image from 'next/image';

export default function Contact() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div className="container section">
        <h1 className="section-title">Contact <span>Us</span></h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '800px' }}>
          Please contact us for quotes, account, or generic information using our contact details below.
        </p>
        
        <div className="grid-12" style={{ gap: '4rem' }}>
          <div className="col-5">
             <div style={{ position: 'relative', height: '300px', width: '100%', border: '1px solid var(--color-border)' }}>
                {/* Image of keyboard as seen in screenshot, but we'll use a placeholder from gallery or abstract */}
                <Image 
                   src="/gallery_frame.png" 
                   alt="Contact Us" 
                   fill 
                   style={{ objectFit: 'cover' }}
                />
             </div>
          </div>
          
          <div className="col-7" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
             
             <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-steel-blue)' }}>Quote Request</h3>
                <p style={{ marginBottom: '0.25rem' }}><strong>Email:</strong> <a href="mailto:bids@ironfs.com" style={{ color: 'var(--color-primary)' }}>bids@ironfs.com</a></p>
                <p><strong>Phone Number:</strong> 410.712.7070 option 1</p>
             </div>

             <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-steel-blue)' }}>Accounts Request</h3>
                <p style={{ marginBottom: '0.25rem' }}><strong>Email:</strong> <a href="mailto:accounts@ironfs.com" style={{ color: 'var(--color-primary)' }}>accounts@ironfs.com</a></p>
                <p><strong>Phone Number:</strong> 410.712.7070 option 2</p>
             </div>

             <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-steel-blue)' }}>Information Request</h3>
                <p style={{ marginBottom: '0.25rem' }}><strong>Email:</strong> <a href="mailto:info@ironfs.com" style={{ color: 'var(--color-primary)' }}>info@ironfs.com</a></p>
                <p><strong>Fax Number:</strong> 425.962.2396</p>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
}
