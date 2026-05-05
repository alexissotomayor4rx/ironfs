export default function MapDirections() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div className="container section">
        <h1 className="section-title">Map & <span>Directions</span></h1>
        
        <div className="grid-12" style={{ gap: '4rem' }}>
          <div style={{ gridColumn: 'span 12' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Where to Find Us</h2>
            <div style={{ background: '#E5E8EB', width: '100%', height: '500px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {/* Embed Google Maps or static map placeholder */}
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.402517865768!2d-76.8048689!3d39.1143899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7defa28796859%3A0xc3b8417c800c144e!2s9010%20Junction%20Dr%2C%20Annapolis%20Junction%2C%20MD%2020701!5e0!3m2!1sen!2sus!4v1714506541484!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
            
            <div style={{ background: 'var(--color-surface)', padding: '2rem', border: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
               <div>
                 <p style={{ marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}><strong>Address</strong></p>
                 <p>9010 Junction Dr.<br/>Annapolis Junction, MD 20701</p>
               </div>
               <div>
                 <p style={{ marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}><strong>Contact</strong></p>
                 <p>Office: 410-712-7070<br/>Fax: 425-962-2396</p>
               </div>
               <div>
                 <p style={{ marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}><strong>Email</strong></p>
                 <p><a href="mailto:info@ironfs.com" style={{ color: 'var(--color-primary)' }}>info@ironfs.com</a></p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
