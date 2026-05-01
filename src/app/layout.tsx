import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Fabrication | Structural Steel",
  description: "High-end structural steel and iron fabrication based in Maryland.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <nav style={{ 
          padding: '1.25rem 0', 
          position: 'fixed', 
          width: '100%', 
          top: 0, 
          zIndex: 100, 
          background: 'rgba(255, 255, 255, 0.85)', 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-border)' 
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/">
              <img src="/logo.png" alt="Iron Fabrication Services, Inc." style={{ height: '50px', objectFit: 'contain', objectPosition: 'left center' }} />
            </Link>

            <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-steel-blue)' }}>
              <Link href="/">Home</Link>
              
              <div className="dropdown">
                <Link href="/about" style={{ padding: '20px 0' }}>About Us</Link>
                <div className="dropdown-content">
                  <Link href="/about">Overview</Link>
                  <Link href="/partners">Partners</Link>
                  <Link href="/careers">Careers</Link>
                </div>
              </div>

              <Link href="/projects">Projects</Link>
              <Link href="/map-directions">Map & Directions</Link>
              <Link href="/contact">Contact</Link>
            </div>
            
            <div className="nav-links">
              <Link href="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>Request a Quote</Link>
            </div>

            <button className="mobile-menu-btn" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
        
        <main>{children}</main>
        
        <footer style={{ background: 'var(--color-steel-blue)', padding: '5rem 0', color: '#FFF' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            <div>
              <div style={{ marginBottom: '1.5rem', background: '#FFF', padding: '10px', display: 'inline-block', borderRadius: '4px' }}>
                <img src="/logo.png" alt="Iron Fabrication Services, Inc." style={{ height: '40px', objectFit: 'contain' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem', lineHeight: 1.8 }}>
                Heavy-duty, tech-forward structural steel fabrication based in Baltimore, MD.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: '#FFF' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</Link></li>
                <li><Link href="/projects" style={{ color: 'rgba(255,255,255,0.7)' }}>Projects</Link></li>
                <li><Link href="/map-directions" style={{ color: 'rgba(255,255,255,0.7)' }}>Map & Directions</Link></li>
                <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: '#FFF' }}>Contact</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                <li>9010 Junction Dr, Annapolis Junction, MD</li>
                <li>info@ironfs.com</li>
                <li>410-712-7070</li>
              </ul>
            </div>
          </div>
          <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
            <div>&copy; {new Date().getFullYear()} Iron Fabrication. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/terms">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
