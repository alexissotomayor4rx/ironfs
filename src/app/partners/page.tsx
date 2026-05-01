"use client";

export default function Partners() {
  const partners = [
    { name: "DAVIS", image: "Davis.png" },
    { name: "CLARK CONSTRUCTION", image: "clark.png" },
    { name: "Balfour Beatty", image: "Belfour.png" },
    { name: "HENSEL PHELPS", image: "hp.png" },
    { name: "MORIARTY", image: "jma.png" },
    { name: "BOZZUTO", image: "bzzuto1.png" },
    { name: "HITT", image: "hitt.png" },
    { name: "FORRESTER", image: "forrester.png" },
    { name: "GRUNLEY", image: "grunley.png" },
    { name: "HARKINS BUILDERS", image: "harkins.png" },
    { name: "McCullough", image: "mccullough.png" },
    { name: "MCN BUILD", image: "mcn.png" },
    { name: "MONARC", image: "monarc.png" },
    { name: "PLAZA CONSTRUCTION", image: "plaza.png" },
    { name: "SHAWMUT", image: "shawmut.png" },
    { name: "winmar", image: "winmar.png" }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'transparent' }}>
      <div className="container section">
        <h1 className="section-title">Our <span>Partners</span></h1>
        
        <div style={{ background: '#FFFFFF', padding: '4rem', border: '1px solid var(--color-border)', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', alignItems: 'center', justifyItems: 'center' }}>
            {partners.map((partner, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                width: '100%',
                height: '120px',
                background: '#FFFFFF',
                borderRadius: '8px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <img 
                  src={`http://ironfs.com/images/partners/${partner.image}`} 
                  alt={partner.name} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
