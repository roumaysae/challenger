// VisionPage.js
import React from 'react';
import './VisionPage.css'; // Assuming you are using CSS modules or a separate CSS file

const VisionPage = () => {
  return (
    <div className="vision-page">
      <header className="vision-header">
        <h1 className="vision-title">The Challenger’s Vision for AIESEC in Mohammedia</h1>
        <h4 className="vision-subtitle">Empowering Our People to Elevate AIESEC in Mohammedia</h4>
        <p className="vision-subtitle">
        Leading with Resilience, Transforming Challenges into Opportunities, and keeping a Legacy of Growth.        </p>
      </header>

      <section className="vision-introduction">
        <h2>WHO AM I</h2>
        <p>
          As "The Challenger," I am driven by resilience, assertiveness, and a relentless pursuit of growth. My journey
          is not just about leading AIESEC in Mohammedia but about challenging the status, building a legacy, and
          creating a sustainable path to success. My vision goes beyond my term as President; it’s about empowering
          every AIESECer to contribute to our collective goals and pushing AIESEC in Mohammedia to reach its highest
          potential.
        </p>
      </section>

      <section className="vision-goals">
        <h2>My Vision: From Start-Up to Local Committee (LC)</h2>
        <div className="vision-goals-details">
          <div className="vision-goal">
            <h3>Short-Term Vision (1 Year)</h3>
            <p>
              In the next year, my primary goal is to establish AIESEC in Mohammedia as a thriving, dynamic entity that
              fully leverages its human resources, operations, and branding to achieve scale-up status. By focusing on
              our people and enhancing our impact, we will build the foundation needed for sustained growth and
              recognition as a Local Committee.
            </p>
          </div>
          <div className="vision-goal">
            <h3>Long-Term Vision (3-5 Years)</h3>
            <p>
              Beyond the immediate future, my vision extends to scaling AIESEC in Mohammedia into a well-recognized
              Local Committee with a strong presence in both outgoing and incoming exchanges. This will involve building
              a robust organizational structure, strengthening partnerships, and solidifying our financial sustainability
              to create a lasting impact in our community.
            </p>
          </div>
        </div>
      </section>

      <section className="vision-pillars">
        <h2>Three Pillars to Achieve the Vision</h2>
        <div className="pillars-list">
          <div className="pillar">
            <h3>1. Human Resources Development and Engagement</h3>
            <p>
              <strong>Goal:</strong> To create a people-centric organization where members and middle managers are fully
              engaged, trained, and aligned with AIESEC’s mission.
            </p>
            <p>
              <strong>Strategy:</strong> Invest in the continuous development of our members through structured learning
              paths, knowledge-sharing sessions, and leadership opportunities. Focus on decentralizing tasks, empowering
              middle managers, and ensuring every member understands their role in our collective success.
            </p>
            <p>
              <strong>Outcome:</strong> A motivated, skilled, and proactive team ready to drive AIESEC’s goals,
              embodying the exchange-driven spirit and representing our entity at every level.
            </p>
          </div>

          <div className="pillar">
            <h3>2. Branding and Community Engagement</h3>
            <p>
              <strong>Goal:</strong> To elevate AIESEC in Mohammedia’s visibility and reputation within the community
              through strategic branding and outreach initiatives.
            </p>
            <p>
              <strong>Strategy:</strong> Launch consistent, impactful offline and online actions that tell the story of
              AIESEC’s value. Foster connections with local institutions, universities, and community centers to build
              partnerships and attract Youth of Mohammedia.
            </p>
            <p>
              <strong>Outcome:</strong> A well-branded AIESEC in Mohammedia that resonates with youth, partners, and the
              broader community, driving membership growth and engagement.
            </p>
          </div>

          <div className="pillar">
            <h3>3. Operational Excellence in Exchanges</h3>
            <p>
              <strong>Goal:</strong> To drive operational growth through increased exchanges, focusing on both outgoing
              and incoming opportunities to maximize our impact.
            </p>
            <p>
              <strong>Strategy:</strong> Streamline processes, leverage member involvement in securing approvals, and
              build strong connections with AIESEC entities globally. Prioritize learning and efficiency to ensure
              smooth operations that support our growth targets.
            </p>
            <p>
              <strong>Outcome:</strong> A significant increase in exchange approvals and participations, reflecting our
              commitment to making a global impact from Mohammedia.
            </p>
          </div>
        </div>
      </section>

      <footer className="vision-footer">
        <h2>Bringing It All Together: The Challenger’s Call to Action</h2>
        <p>
          As the future President, my role is to lead, manage, and represent AIESEC in Mohammedia. But more importantly,
          it’s about inspiring every AIESECer to embrace the challenge, take ownership, and work together towards our
          shared vision. We are not just building an organization; we are creating a legacy of growth, impact, and
          excellence that will propel AIESEC in Mohammedia to its rightful place as a Local Committee.
        </p>
        <p>
          Together, as an entity, we will not only reach our goals but set new benchmarks for success. This is our
          journey, our challenge, and our legacy. Let’s make AIESEC in Mohammedia the LC we all envision—one member, one
          action, one impact at a time.
        </p>
      </footer>
    </div>
  );
};

export default VisionPage;
