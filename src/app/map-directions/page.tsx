export default function MapDirections() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div className="container section">
        <h1 className="section-title">Map & <span>Directions</span></h1>
        
        <div className="grid-12" style={{ gap: '4rem' }}>
          <div style={{ gridColumn: 'span 7' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>Where to Find Us</h2>
            <div style={{ background: '#E5E8EB', width: '100%', height: '400px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            
            <div style={{ background: 'var(--color-surface)', padding: '2rem', border: '1px solid var(--color-border)' }}>
               <p style={{ marginBottom: '0.5rem' }}><strong>Address:</strong> 9010 Junction Dr. Annapolis Junction, MD 20701</p>
               <p style={{ marginBottom: '0.5rem' }}><strong>Office:</strong> 410-712-7070</p>
               <p style={{ marginBottom: '0.5rem' }}><strong>Fax:</strong> 425-962-2396</p>
               <p><strong>Email:</strong> <a href="mailto:info@ironfs.com" style={{ color: 'var(--color-primary)' }}>info@ironfs.com</a></p>
            </div>
          </div>

          <div style={{ gridColumn: 'span 5' }}>
            <div style={{ marginBottom: '3rem' }}>
               <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-steel-blue)' }}>Directions from Baltimore</h3>
               <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                  <li>Start out going south on I-95 towards Washington DC</li>
                  <li>Take exit 38A to merge on MD-32 W Towards fort Meade</li>
                  <li>Take exit 11 for Dorsey run Rd</li>
                  <li>Turn right onto Dorsey Run rd</li>
                  <li>Turn right at the 1st cross street onto Junction Dr</li>
                  <li>Turn right to stay on Junction Dr</li>
               </ul>
            </div>

            <div>
               <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-steel-blue)' }}>Directions from DC and Virginia</h3>
               <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                  <li>Start out going east on I-495 E</li>
                  <li>Merge onto I-95 N via EXIT 27 toward Baltimore / New York</li>
                  <li>Merge onto MD-32 E via EXIT 38A toward Fort Meade</li>
                  <li>Take the US-1 exit, EXIT 12B-A, toward Elkridge / Laurel</li>
                  <li>Merge onto US-1 N / Washington Blvd via EXIT 11 for Dorsey Run Rd</li>
                  <li>Turn right onto Dorsey Run Rd / MD-732</li>
                  <li>Turn right at the 1st cross street onto Junction Dr</li>
                  <li>Turn right to stay on Junction Dr</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
