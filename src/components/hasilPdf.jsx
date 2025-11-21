import "./style.css";

export default function hasilPdf() {
  return (
    <div>
      <div className="resume">
        <div className="header-band">
          <div className="photo">
            {/* <Img
              src="/mnt/data/6ccbe3a3-9c6b-4ffc-a78f-18ad8ef01079.JPG"
              alt="photo"
            /> */}
          </div>
          <div className="header-info">
            <div className="name-small">Sally</div>
            <div className="name-big">Branders</div>
          </div>
          <div className="job-title">JOB TITLE</div>
        </div>

        <aside className="sidebar">
          <div className="section">
            <h3>CONTACTO</h3>
            <div className="divider"></div>
            <div className="contact-item muted">✉ sally.branders@gmail.com</div>
            <div className="contact-item muted">☎ +1 232 555 55 55</div>
            <div className="contact-item muted">📍 NY, USA</div>
            <div className="contact-item muted">in linkedin/sally.branders</div>
          </div>

          <div className="section">
            <h3>PROFILE SUMMARY</h3>
            <div className="divider"></div>
            <p className="profile">
              Business development manager looking to obtain a challenging
              position in a organization, utilizing my proven track record in
              driving revenue growth and forging strategic partnerships to
              achieve business objectives.
            </p>
          </div>

          <div className="section">
            <h3>SKILLS</h3>
            <div className="divider"></div>
            <ul className="skills-list">
              <li>Excel</li>
              <li>PowerPoint</li>
              <li>CRM</li>
              <li>Problem-Solving</li>
              <li>Team Leadership</li>
            </ul>
          </div>

          <div className="section">
            <h3>LANGUAGES</h3>
            <div className="divider"></div>
            <ul className="lang-list">
              <li>English: Native</li>
              <li>Spanish: Intermediate</li>
              <li>French: Beginner</li>
            </ul>
          </div>
        </aside>

        <main className="main">
          <h2>PROFESSIONAL EXPERIENCE</h2>
          <section className="job">
            <div className="company">XYZ CONSULTING FIRM</div>
            <div className="role">
              Business Development Manager — NY, USA | 00/0000 - 00/0000
            </div>
            <ul className="bullets">
              <li>
                Developed and executed a comprehensive sales strategy, resulting
                in a 40% increase in annual revenue within one year.
              </li>
              <li>
                Identified and pursued new business opportunities through market
                research.
              </li>
            </ul>
          </section>

          <section className="job">
            <div className="company">ABC CORPORATION</div>
            <div className="role">
              Sales Representative — NY, USA | 00/0000 - 00/0000
            </div>
            <ul className="bullets">
              <li>
                Achieved consistent sales targets by successfully prospecting
                and closing new business opportunities in a competitive market.
              </li>
              <li>
                Conducted product demonstrations and presentations to potential
                clients.
              </li>
            </ul>
          </section>

          <section className="job">
            <div className="company">DEF RESEARCH AGENCY</div>
            <div className="role">
              Market Research Analyst — NY, USA | 00/0000 - 00/0000
            </div>
            <ul className="bullets">
              <li>
                Conducted in-depth market research and competitor analysis,
                providing valuable insights to guide strategic decision-making.
              </li>
              <li>Developed comprehensive market reports.</li>
            </ul>
          </section>

          <div className="education">
            <h2>EDUCATION</h2>
            <div className="edu-item">
              <div className="degree">MASTER OF BUSINESS ADMINISTRATION</div>
              <div className="school">NYU — NY, USA | 20XX - 20XX</div>
            </div>
            <div className="edu-item">
              <div className="degree">BACHELOR OF COMMERCE IN MARKETING</div>
              <div className="school">NYU — NY, USA | 20XX - 20XX</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
