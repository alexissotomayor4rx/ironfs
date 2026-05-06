export default function MapDirections() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", background: "var(--color-bg)" }}>
      <div className="container section">
        <h1 className="section-title">
          Contact <span>Us</span>
        </h1>
        <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", marginBottom: "3.5rem", maxWidth: "600px" }}>
          Please contact us for quotes, account, or general information using the details below.
        </p>

        {/* ── Map + Info row ─────────────────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
          marginBottom: "4rem",
        }}
          className="contact-grid"
        >
          {/* Map — left column */}
          <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid var(--color-border)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.402517865768!2d-76.8048689!3d39.1143899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7defa28796859%3A0xc3b8417c800c144e!2s9010%20Junction%20Dr%2C%20Annapolis%20Junction%2C%20MD%2020701!5e0!3m2!1sen!2sus!4v1714506541484!5m2!1sen!2sus"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info — right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Address */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{
                width: "40px", height: "40px", flexShrink: 0,
                background: "var(--color-primary)", borderRadius: "4px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "0.25rem" }}>Address</p>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  9010 Junction Dr.<br />Annapolis Junction, MD 20701
                </p>
                <a
                  href="https://maps.google.com/?q=9010+Junction+Dr,+Annapolis+Junction,+MD+20701"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block", marginTop: "0.6rem",
                    fontSize: "0.85rem", fontWeight: 600,
                    color: "var(--color-primary)",
                    borderBottom: "1px solid currentColor",
                    paddingBottom: "1px",
                  }}
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{
                width: "40px", height: "40px", flexShrink: 0,
                background: "var(--color-primary)", borderRadius: "4px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "0.25rem" }}>Phone</p>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  Office: <a href="tel:4107127070" style={{ color: "var(--color-primary)" }}>410-712-7070</a><br />
                  Fax: 425-962-2396
                </p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{
                width: "40px", height: "40px", flexShrink: 0,
                background: "var(--color-primary)", borderRadius: "4px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "var(--color-charcoal)", marginBottom: "0.25rem" }}>Email</p>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  <a href="mailto:info@ironfs.com" style={{ color: "var(--color-primary)" }}>info@ironfs.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Contact departments ─────────────────────────── */}
        <div style={{
          background: "var(--color-steel-blue)",
          padding: "clamp(2rem, 5vw, 3.5rem)",
          borderRadius: "4px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2.5rem",
        }}>
          {[
            {
              title: "Quote Request",
              email: "bids@ironfs.com",
              phone: "410.712.7070 opt. 1",
            },
            {
              title: "Accounts",
              email: "accounts@ironfs.com",
              phone: "410.712.7070 opt. 2",
            },
            {
              title: "General Info",
              email: "info@ironfs.com",
              phone: "410.712.7070",
            },
          ].map((dept) => (
            <div key={dept.title}>
              <h3 style={{
                color: "#fff", fontSize: "1rem", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.05em",
                marginBottom: "1rem", paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
              }}>
                {dept.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "0.4rem", fontSize: "0.95rem" }}>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email</span><br />
                <a href={`mailto:${dept.email}`} style={{ color: "#A3B3F1" }}>{dept.email}</a>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Phone</span><br />
                {dept.phone}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </div>
  );
}
