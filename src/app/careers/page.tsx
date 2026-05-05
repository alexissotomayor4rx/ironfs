export default function Careers() {
  return (
    <div
      style={{
        paddingTop: "100px",
        minHeight: "100vh",
        background: "var(--color-surface)",
      }}
    >
      <div className="container section">
        {/* Intro Section */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 className="section-title" style={{ marginBottom: "1.5rem" }}>
            Join Our <span>Team</span>
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-muted)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Iron Fabrication Services, Inc. is always looking for highly trained
            and qualified individuals, as well as motivated beginners who desire
            to learn. Build your career with a leader in structural steel.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <a
              href="mailto:resume@ironfs.com?cc=admin@ironfs.com"
              className="btn btn-primary"
              style={{ padding: "1rem 2.5rem" }}
            >
              Submit Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
