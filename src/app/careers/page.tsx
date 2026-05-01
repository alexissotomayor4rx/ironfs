export default function Careers() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'transparent' }}>
      <div className="container section">
        <h1 className="section-title">Join Our <span>Team</span></h1>
        
        <div style={{ background: '#FFFFFF', padding: '3rem', border: '1px solid var(--color-border)', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          
          <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-charcoal)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Iron Fabrication Services, Inc. is always in search of highly trained and qualified people as well as less experienced people who have an interest in our work and desire to learn.
            </p>
            <p style={{ color: 'var(--color-charcoal)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Please submit resumes to:</p>
            <p style={{ color: 'var(--color-charcoal)', lineHeight: '1.6' }}>
              Iron Fabrication Services, Inc.<br />
              Human Resources<br />
              9010 Junction Dr., Annapolis Junction, MD 20701<br />
              Hanover, MD 21076
            </p>
            <p style={{ color: 'var(--color-charcoal)', marginTop: '1rem' }}>
              Or <a href="mailto:resume@ironfs.com" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>resume@ironfs.com</a>
            </p>
          </div>

          <h2 style={{ fontSize: '2rem', color: 'var(--color-steel-blue)', marginBottom: '2rem' }}>Current Positions</h2>

          {/* Position 1 */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>1. Position Title</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Construction Iron Foreman</p>
            
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>Position summary</h4>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Responsible to manage jobsite which includes rising, placing, and uniting iron or steel girders, columns, and other structural members to form completed structures or structural frameworks. Lead crews to erect miscellaneous metals structures, such as metal guard rails, prefabricated stairs and ornamental metals structures.
            </p>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>Tasks</h4>
            <ul style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Coordinate with G.C. any discrepancy between blueprints and existing field conditions and come up with solutions.</li>
              <li>Attend foreman meetings with G.C. and coordinate all necessary work preparation before crews get to the jobsite.</li>
              <li>Lead and direct welders and erectors to finish jobs per schedule.</li>
              <li>Responsible for enforcing safety regulations on jobsite and make sure that all workers and labors obey the safety regulations and follow OSHA standards.</li>
              <li>Connect columns, beams, and girders with bolts, following blueprints and instructions from supervisors.</li>
              <li>Fasten structural-steel members to hoist cables, using chains, cables, or rope.</li>
              <li>Bolt aligned structural-steel members in position for permanent riveting, bolting, or welding into place.</li>
              <li>Pull, push, or pry structural-steel members into approximate positions for bolting into place.</li>
              <li>Hoist steel beams, girders, and columns into place, using cranes, or signal hoisting equipment operators to lift and position structural-steel members.</li>
              <li>Read specifications and blueprints to determine the locations, quantities, and sizes of materials required.</li>
              <li>Weld according to ASTM standards.</li>
            </ul>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>Skills</h4>
            <ul style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li><strong>Active Listening</strong> - Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.</li>
              <li><strong>Coordination</strong> - Adjusting actions in relation to others' actions.</li>
              <li><strong>Time Management</strong> - Managing one's own time and the time of others.</li>
              <li><strong>Active Learning</strong> - Understanding the implications of new information for both current and future problem-solving and decision-making.</li>
              <li><strong>Equipment Selection</strong> - Determining the kind of tools and equipment needed to do a job.</li>
              <li><strong>Mathematics</strong> - Using mathematics to solve problems.</li>
            </ul>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>Attributes</h4>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li><strong>Arm-Hand Steadiness</strong> - The ability to keep your hand and arm steady while moving your arm or while holding your arm and hand in one position.</li>
              <li><strong>Multilimb Coordination</strong> - The ability to coordinate two or more limbs while sitting, standing, or lying down. It does not involve performing the activities while the whole body is in motion.</li>
              <li><strong>Static Strength</strong> - The ability to exert maximum muscle force to lift, push, pull, or carry objects.</li>
              <li><strong>Manual Dexterity</strong> - The ability to quickly move your hand, your hand together with your arm, or your two hands to grasp, manipulate, or assemble objects.</li>
              <li><strong>Control Precision</strong> - The ability to quickly and repeatedly adjust the controls of a machine or a vehicle to exact positions.</li>
              <li><strong>Near Vision</strong> - The ability to see details at close range (within a few feet of the observer).</li>
            </ul>
          </div>

          <hr style={{ border: 'none', borderTop: '1px dashed var(--color-border)', margin: '3rem 0' }} />

          {/* Position 2 */}
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>2. Position Title</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Accountant</p>
            
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>Description of Job Duties:</h4>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Prepare weekly Bank Reconciliation & reports for management including (but not limited to) Unearned Revenue & Post Revenue, Daily Cash reports, POC of all Banking matters, Daily Bank Balance reports. Prepare weekly cash deposits, forecasts & cash account reconciliation. Assist with timely & accurate month end close. Assist in collections of study revenue including generating monthly study P&L statements. Communicate monthly with Project Managers regarding review of projects receivables. Actively engage in month & year end closing activities. Assist with sales & personal property tax preparation. Perform monthly reconciliation of unclaimed checks & maintain unclaimed property schedule. Prepare & review employee credit card accounts to include coding & processing of weekly & monthly activities. Follow up on payments with clients. Serve as lead accountant & mentor to other staff members. Use knowledge of construction job costing to perform job duties. 40 hrs/wk.
            </p>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>Minimum Requirements:</h4>
            <ul style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Bachelor's Degree in Accounting, Finance, Business Administration or closely related and two years of experience required.</li>
            </ul>

            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>LOCATION OF EMPLOYMENT:</h4>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>9010 Junction DR, Annapolis Junction, MD 20701</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
