export default function Careers() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--color-surface)' }}>
      <div className="container section">
        
        {/* Intro Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>Join Our <span>Team</span></h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Iron Fabrication Services, Inc. is always looking for highly trained and qualified individuals, as well as motivated beginners who desire to learn. Build your career with a leader in structural steel.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="mailto:resume@ironfs.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
              Submit General Resume
            </a>
          </div>
        </div>

        <h2 style={{ fontSize: '2rem', color: 'var(--color-charcoal)', marginBottom: '2rem', textAlign: 'center' }}>Open Positions</h2>

        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Position 1: Foreman */}
          <div style={{ background: '#FFF', borderRadius: '8px', padding: 'clamp(1.5rem, 5vw, 3rem)', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-steel-blue)', marginBottom: '0.5rem' }}>Construction Iron Foreman</h3>
                <span style={{ display: 'inline-block', background: 'rgba(49, 82, 163, 0.1)', color: 'var(--color-primary)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600 }}>Full-Time</span>
              </div>
              <a href="mailto:resume@ironfs.com?subject=Application for Construction Iron Foreman" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>Apply Now</a>
            </div>
            
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Manage jobsite operations including the rising, placing, and uniting of iron or steel structural members. You will lead crews to erect miscellaneous metals structures and ensure all safety regulations are strictly followed.
            </p>

            <div className="grid-12" style={{ gap: '2rem', marginBottom: 0 }}>
              <div className="col-7">
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>Key Responsibilities</h4>
                <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Coordinate with General Contractors and resolve blueprint discrepancies.</li>
                  <li>Lead and direct welders and erectors to meet project schedules.</li>
                  <li>Enforce OSHA safety regulations and ensure compliance.</li>
                  <li>Connect columns, beams, and girders following supervisor instructions.</li>
                  <li>Hoist steel members into place using cranes and signal operators.</li>
                  <li>Weld according to ASTM standards.</li>
                </ul>
              </div>
              <div className="col-5">
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>Requirements & Skills</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Blueprint Reading', 'ASTM Welding', 'OSHA Standards', 'Team Leadership', 'Time Management', 'Physical Strength', 'Precision Control', 'Mathematics'].map(skill => (
                    <span key={skill} style={{ background: 'var(--color-surface)', color: 'var(--color-charcoal)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', border: '1px solid var(--color-border)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Position 2: Accountant */}
          <div style={{ background: '#FFF', borderRadius: '8px', padding: 'clamp(1.5rem, 5vw, 3rem)', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-steel-blue)', marginBottom: '0.5rem' }}>Accountant</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ display: 'inline-block', background: 'rgba(49, 82, 163, 0.1)', color: 'var(--color-primary)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600 }}>Full-Time (40 hrs/wk)</span>
                  <span style={{ display: 'inline-block', background: 'rgba(108, 122, 137, 0.1)', color: 'var(--color-text-muted)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600 }}>Annapolis Junction, MD</span>
                </div>
              </div>
              <a href="mailto:resume@ironfs.com?subject=Application for Accountant" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>Apply Now</a>
            </div>
            
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Lead financial operations including bank reconciliations, cash reports, and month-end closing activities. Serve as the lead accountant and mentor to staff members while utilizing knowledge of construction job costing.
            </p>

            <div className="grid-12" style={{ gap: '2rem', marginBottom: 0 }}>
              <div className="col-7">
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>Key Responsibilities</h4>
                <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Prepare weekly Bank Reconciliations and management reports.</li>
                  <li>Assist with timely and accurate month & year-end closing.</li>
                  <li>Generate monthly study P&L statements and review project receivables.</li>
                  <li>Assist with sales & personal property tax preparation.</li>
                  <li>Prepare & review employee credit card accounts.</li>
                </ul>
              </div>
              <div className="col-5">
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>Requirements & Skills</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Bachelor\'s Degree', '2+ Years Experience', 'Accounting/Finance', 'Bank Reconciliation', 'Construction Job Costing', 'Mentorship'].map(skill => (
                    <span key={skill} style={{ background: 'var(--color-surface)', color: 'var(--color-charcoal)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', border: '1px solid var(--color-border)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Info Footer */}
        <div style={{ textAlign: 'center', marginTop: '5rem', padding: '3rem', background: '#FFF', border: '1px solid var(--color-border)', borderRadius: '8px', maxWidth: '800px', margin: '5rem auto 0' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--color-steel-blue)', marginBottom: '1rem' }}>Other Ways to Apply</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            You can also mail your physical resume to our Human Resources department:
          </p>
          <div style={{ display: 'inline-block', textAlign: 'left', background: 'var(--color-surface)', padding: '1.5rem 2rem', borderRadius: '4px', borderLeft: '4px solid var(--color-primary)' }}>
            <p style={{ color: 'var(--color-charcoal)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Iron Fabrication Services, Inc.</p>
            <p style={{ color: 'var(--color-text-muted)' }}>9010 Junction Dr.</p>
            <p style={{ color: 'var(--color-text-muted)' }}>Annapolis Junction, MD 20701</p>
          </div>
        </div>

      </div>
    </div>
  );
}
