import { useState } from "react";
import IMG from "../assets/cv-review.JPG";
import "./style.css";

export default function hasilPdf() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center gap-3 m-3">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-lg"
        >
          Contoh Hasil PDF
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-20"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Box */}
          <div className="fixed overflow-auto bg-white rounded-2xl shadow-2xl w-full h-auto max-h-180 p-5">
            {/*<img
              src={IMG}
              alt="image-cv"
              className="object-contain w-full h-auto max-h-140 rounded-lg shadow-2xl"
            /> */}
            {/* Icon (opsional) */}
            <div className="flex gap-10 m-1.5 justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
              >
                Kembali
              </button>
            </div>
            <div className="resume object-contain w-full p-3">
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
                  <div className="contact-item muted">
                    ✉ sally.branders@gmail.com
                  </div>
                  <div className="contact-item muted">☎ +1 232 555 55 55</div>
                  <div className="contact-item muted">📍 NY, USA</div>
                  <div className="contact-item muted">
                    in linkedin/sally.branders
                  </div>
                </div>

                <div className="section">
                  <h3>PROFILE SUMMARY</h3>
                  <div className="divider"></div>
                  <p className="profile">
                    Business development manager looking to obtain a challenging
                    position in a organization, utilizing my proven track record
                    in driving revenue growth and forging strategic partnerships
                    to achieve business objectives.
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
                      Developed and executed a comprehensive sales strategy,
                      resulting in a 40% increase in annual revenue within one
                      year.
                    </li>
                    <li>
                      Identified and pursued new business opportunities through
                      market research.
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
                      Achieved consistent sales targets by successfully
                      prospecting and closing new business opportunities in a
                      competitive market.
                    </li>
                    <li>
                      Conducted product demonstrations and presentations to
                      potential clients.
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
                      Conducted in-depth market research and competitor
                      analysis, providing valuable insights to guide strategic
                      decision-making.
                    </li>
                    <li>Developed comprehensive market reports.</li>
                  </ul>
                </section>

                <div className="education">
                  <h2>EDUCATION</h2>
                  <div className="edu-item">
                    <div className="degree">
                      MASTER OF BUSINESS ADMINISTRATION
                    </div>
                    <div className="school">NYU — NY, USA | 20XX - 20XX</div>
                  </div>
                  <div className="edu-item">
                    <div className="degree">
                      BACHELOR OF COMMERCE IN MARKETING
                    </div>
                    <div className="school">NYU — NY, USA | 20XX - 20XX</div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
