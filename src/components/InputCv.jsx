import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
<<<<<<< HEAD
=======
import Section from "./Section.jsx";
import Skills from "./Skills.jsx";
>>>>>>> 619e8da (version 1.0)

export default function InputCv() {
  const maxSize = 2 * 1024 * 1024;

  const [submittedData, setSubmittedData] = useState(null);
  const [listPengalaman, setListPengalaman] = useState([]);

  const [preview, setPreview] = useState(null);
  const [profile, setProfile] = useState({
    nama: "",
    pekerjaan: "",
    email: "",
    telfon: "",
    lokasi: "",
  });
<<<<<<< HEAD
  const [skills, setSkills] = useState([]);
=======

>>>>>>> 619e8da (version 1.0)
  const [pengalaman, setPengalaman] = useState({
    posisi: "",
    perusahaan: "",
    tahun: "",
<<<<<<< HEAD
=======
    detail: "",
>>>>>>> 619e8da (version 1.0)
  });
  const [bahasa, setBahasa] = useState({
    inggris: "",
    spanyol: "",
    prancis: "",
  });
  const [education, setEducation] = useState("");

  const printRef = useRef();

  // handle upload image
  function handleImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > maxSize) {
      alert("Ukuran File Maksimal 2 mb");
      event.target.value = null;
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  }

  function handleProfile(event) {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  }

<<<<<<< HEAD
  function handleSkills(event) {
    setSkills([event.target.value]);
=======
  const [skills, setSkills] = useState("");
  const [listSkills, setListSkills] = useState([]);

  function handleSkills(event) {
    setSkills(event.target.value);
  }

  function handleTambahSkills() {
    setListSkills((prev) => [...prev, skills]);
    setSkills("");
>>>>>>> 619e8da (version 1.0)
  }

  function handlePengalaman(event) {
    const { name, value } = event.target;
    setPengalaman((prev) => ({ ...prev, [name]: value }));
  }
<<<<<<< HEAD
  const [listSkills, setListSkills] = useState("");

  function handleTambahSkills() {
    setListSkills((prev) => [...prev, skills]);
    setSkills("");
  }
=======
  
>>>>>>> 619e8da (version 1.0)

  function handleTambahPengalaman() {
    setListPengalaman((prev) => [...prev, pengalaman]);
    setPengalaman({
      posisi: "",
      perusahaan: "",
      tahun: "",
<<<<<<< HEAD
=======
      detail: "",
>>>>>>> 619e8da (version 1.0)
    });
  }

  function handleBahasa(event) {
    const { name, value } = event.target;
    setBahasa((prev) => ({ ...prev, [name]: value }));
  }

  function handleEducation(event) {
    setEducation([event.target.value]);
  }

  // submit hasil inputan
  function handleSubmit() {
    setSubmittedData({
      profile,
      skills: listSkills,
      pengalaman: listPengalaman,
      bahasa,
      education,
    });
  }

  // megnhapus hasil inputan
  function handleDelete() {
    if (!submittedData) {
      alert("belum ada data yang di input");
      return;
    }

    const konfirmasi = window.confirm("hapus semua data?");

    if (konfirmasi) {
      setProfile({
        nama: "",
        pekerjaan: "",
        email: "",
        telfon: "",
        lokasi: "",
      });
      setSkills("");
      setPengalaman({
        perusahaan: "",
        posisi: "",
        tahun: "",
<<<<<<< HEAD
=======
        detail: "",
>>>>>>> 619e8da (version 1.0)
      });
      setBahasa({
        inggris: "",
        spanyol: "",
        prancis: "",
      });
      setEducation("");

      // Hapus data yang sudah ditampilkan
      setSubmittedData(null);

      alert("Data CV berhasil di hapus");
    }
  }
  // fungsi save as PDF
  function handleSavePDF() {
    const element = printRef.current;
    const options = {
      margin: 3,
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orentiation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  }

  // styling

  const inputStyled =
    "w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow max-w-2xl justify-items-start";

  const groupLabelInput = "flex items-center justify-between mb-4 gap-20";
  const buttonStyled =
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded items-center max-w-50";
  const sideButton = "flex flex-row content-center";

  return (
    <div className="max-w-[100] rounded overflow-hidden shadow-lg bg-linear-to-r from-cyan-200 to-amber-200">
      <div className="max-w-[100] rounded overflow-hidden shadow-lg p-20">
        <div className="flex flex-col p-5 min-w-20xl">
          <h2 className="text-5xl font-serif">InputCv</h2>
          <div className={groupLabelInput}>
            <label htmlFor="" className="">
              Nama
            </label>
            <input
              className={inputStyled}
              type="text"
              name="nama"
              placeholder="masukkan nama"
              value={profile.nama}
              onChange={handleProfile}
            />
          </div>
          <div className={groupLabelInput}>
            <label htmlFor="">Pekerjaan</label>
            <input
              className={inputStyled}
              type="text"
              name="pekerjaan"
              placeholder="pekejeraan"
              value={profile.pekerjaan}
              onChange={handleProfile}
            />
          </div>
          <div className={groupLabelInput}>
            <label htmlFor="">Email</label>
            <input
              className={inputStyled}
              type="text"
              name="email"
              placeholder="masukkan email"
              value={profile.email}
              onChange={handleProfile}
            />
          </div>
          <div className={groupLabelInput}>
            <label htmlFor="">Telfon</label>
            <input
              className={inputStyled}
              type="text"
              name="telfon"
              placeholder="nomor telfon"
              value={profile.telfon}
              onChange={handleProfile}
            />
          </div>
          <div className={groupLabelInput}>
            <label htmlFor="">Lokasi</label>
            <input
              className={inputStyled}
              type="text"
              name="lokasi"
              placeholder="masukkan lokasi"
              value={profile.lokasi}
              onChange={handleProfile}
            />
          </div>
          <div className={groupLabelInput}>
            <label htmlFor="">Upload Image :</label>
            <input
              type="file"
              accept="image/"
              onChange={handleImage}
              className={buttonStyled}
            />
          </div>
        </div>
        <div className="flex flex-col p-5 min-w-20xl">
          <div className={groupLabelInput}>
            <label htmlFor="">Skills</label>
            <input
              className={inputStyled}
              type="text"
              placeholder="Skills"
              name="skills"
              value={skills}
              onChange={handleSkills}
            />
          </div>
          <div>
            <button onClick={handleTambahSkills} className={buttonStyled}>
              Tambah Skills
            </button>
          </div>
        </div>
        <div className="flex flex-col p-5 min-w-20xl">
          <div className="flex flex-col">
            <label>Tambah Pengalaman</label>
            <div className={groupLabelInput}>
              <label htmlFor="">Posisi</label>
              <input
                className={inputStyled}
                type="text"
                name="posisi"
                value={pengalaman.posisi}
                onChange={handlePengalaman}
                placeholder="Posisi pekerjaan"
              />
            </div>
            <div className={groupLabelInput}>
              <label htmlFor="">Perusahaan</label>
              <input
                className={inputStyled}
                type="text"
                name="perusahaan"
                value={pengalaman.perusahaan}
                onChange={handlePengalaman}
                placeholder="Nama perusahaan"
              />
            </div>
            <div className={groupLabelInput}>
              <label htmlFor="">Tahun</label>
              <input
                className={inputStyled}
                type="text"
                name="tahun"
                value={pengalaman.tahun}
                onChange={handlePengalaman}
                placeholder="Tahun bekerja"
              />
            </div>
<<<<<<< HEAD
=======
            <div className={groupLabelInput}>
              <label htmlFor="">Detail Pekerjaan</label>
              <textarea
                className={inputStyled}
                type="text"
                name="tahun"
                value={pengalaman.detail}
                onChange={handlePengalaman}
                placeholder="Ceritakan Pengalaman Anda Bekerja Pada Perusahaan"
              />
            </div>
>>>>>>> 619e8da (version 1.0)
            <div className={sideButton}>
              <button onClick={handleTambahPengalaman} className={buttonStyled}>
                Tambah Pengalaman
              </button>
            </div>
          </div>
          <div className="flex flex-col p-5 min-w-20xl">
            <div className={groupLabelInput}>
              <label htmlFor="">Bahasa Inggris</label>
              <input
                className={inputStyled}
                type="text"
                placeholder="Bahasa Inggris"
                name="inggris"
                value={bahasa.inggris}
                onChange={handleBahasa}
              />
            </div>
            <div className={groupLabelInput}>
              <label htmlFor="">Bahasa Spanyol</label>
              <input
                className={inputStyled}
                type="text"
                placeholder="Bahasa Spanyol"
                name="spanyol"
                value={bahasa.spanyol}
                onChange={handleBahasa}
              />
            </div>
            <div className={groupLabelInput}>
              <label htmlFor="">Bahasa Prancis</label>
              <input
                className={inputStyled}
                type="text"
                placeholder="Bahasa Prancis"
                name="prancis"
                value={bahasa.prancis}
                onChange={handleBahasa}
              />
            </div>
          </div>
          <div className="flex flex-col p-5 min-w-20xl">
            <div className={groupLabelInput}>
              <h2>Education</h2>
              <input
                className={inputStyled}
                type="text"
                placeholder="Education"
                name="education"
                value={education}
                onChange={handleEducation}
              />
            </div>
          </div>
          <div className={sideButton}>
            <button onClick={handleSubmit} className={buttonStyled}>
              Submit
            </button>
          </div>
          {submittedData && (
            <>
<<<<<<< HEAD
              <div ref={printRef}>
                <p>Nama: {submittedData.profile.nama}</p>
                <p>Pekerjaan: {submittedData.profile.pekerjaan}</p>
                <p>Email: {submittedData.profile.email}</p>
                <p>Nomor Telfon: {submittedData.profile.telfon}</p>
                <p>Lokasi: {submittedData.profile.lokasi}</p>
                <p>Skills : {submittedData.skills}</p>
                <p>Pengalaman :</p>
                <ul>
                  {listPengalaman.map((item, index) => (
                    <li key={index}>
                      {item.posisi} - {item.perusahaan} ({item.tahun})
                    </li>
                  ))}
                </ul>
                <p>Inggris : {submittedData.bahasa.inggris}</p>
                <p>Spanyol : {submittedData.bahasa.spanyol}</p>
                <p>Prancis : {submittedData.bahasa.prancis}</p>
                <p>Education : {submittedData.education}</p>
                <img src={preview} alt="Preview" />
=======
              <div className="flex">
                <p className="flex flex-col border-b-stone-700">
                  <label>Nama: {submittedData.profile.nama}</label>
                  <label>Pekerjaan: {submittedData.profile.pekerjaan}</label>
                  <label>Email: {submittedData.profile.email}</label>
                  <label>Nomor Telfon: {submittedData.profile.telfon}</label>
                  <label>Lokasi: {submittedData.profile.lokasi}</label>
                </p>
                <p className="flex flex-col border-b-stone-700">
                  <label>Skills : {submittedData.skills.kemampuan}</label>
                  <label htmlFor="">Pengalaman :</label>
                  <ul>
                  {listPengalaman.map((item, index) => (
                    <li key={index}>
                      {item.posisi} - {item.perusahaan} - ({item.tahun})
                      <p>{item.detail}</p>
                    </li>
                  ))}
                </ul>
                </p>
                <p className="flex flex-col border-b-stone-700">
                  <label>Inggris : {submittedData.bahasa.inggris}</label>
                  <label>Spanyol : {submittedData.bahasa.spanyol}</label>
                  <label>Prancis : {submittedData.bahasa.prancis}</label>
                  <label>Education : {submittedData.education}</label>
                </p>
                <p className="flex flex-col border-b-stone-700">
                  <img src={preview} alt="Preview" />
                </p>
>>>>>>> 619e8da (version 1.0)
              </div>
            </>
          )}
          {submittedData && (
            <button onClick={handleDelete} className={buttonStyled}>
              Hapus Data
            </button>
          )}
          {submittedData && (
            <button onClick={handleSavePDF} className={buttonStyled}>
              Save As PDF
            </button>
          )}
          {submittedData && (
            <div ref={printRef}>
              <div className="resume">
                <div className="header-band">
                  <div className="photo">
                    <img src={preview} alt="Preview" />
                  </div>
                  <div className="header-info">
                    <div className="name-small"></div>
                    <div className="name-big">{submittedData.profile.nama}</div>
                  </div>
                  <div className="job-title">JOB TITLE</div>
                </div>
                <aside className="sidebar">
                  <div className="section">
                    <h3>CONTACTO</h3>
                    <div className="divider"></div>
                    <div className="contact-item muted">
                      ✉ {submittedData.profile.email}
                    </div>
                    <div className="contact-item muted">
                      ☎ +62 {submittedData.profile.telfon}
                    </div>
                    <div className="contact-item muted">
                      📍 {submittedData.profile.lokasi}
                    </div>
                  </div>
                  <div className="section">
                    <h3>PROFILE SUMMARY</h3>
                    <div className="divider"></div>
                    <p className="profile">
                      Business development manager looking to obtain a
                      challenging position in a organization, utilizing my
                      proven track record in driving revenue growth and forging
                      strategic partnerships to achieve business objectives.
                    </p>
                  </div>
                  <div className="section">
                    <h3>SKILLS</h3>
                    <div className="divider"></div>
<<<<<<< HEAD
                    <ul className="skills-list">
                      <li>{submittedData.skills}</li>
                    </ul>
=======
                    {listSkills.map((item, index) => (
                      <Skills key={index} className="skills-list" kemampuan={item} />
                    ))}
>>>>>>> 619e8da (version 1.0)
                  </div>
                  <div className="section">
                    <h3>LANGUAGES</h3>
                    <div className="divider"></div>
                    <ul className="lang-list">
                      <li>English: {submittedData.bahasa.inggris}</li>
                      <li>Spanish: {submittedData.bahasa.spanyol}</li>
                      <li>French: {submittedData.bahasa.prancis}</li>
                    </ul>
                  </div>
                </aside>
                <main className="main">
                  <h2>PROFESSIONAL EXPERIENCE</h2>
<<<<<<< HEAD
                  <section className="job">
                    <div className="company">
                      {listPengalaman.perusahaan} Year : {listPengalaman.tahun}
                    </div>
                    <div className="role">{listPengalaman.pekerjaan}</div>
                    <ul className="bullets">
                      <li>
                        Developed and executed a comprehensive sales strategy,
                        resulting in a 40% increase in annual revenue within one
                        year.
                      </li>
                      <li>
                        Identified and pursued new business opportunities
                        through market research.
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
=======
                  {listPengalaman.map((item, index) => (
                    <Section key={index} className="job" perusahaan={item.perusahaan} pekerjaan={item.posisi} tahun={item.tahun} detailPekerjaan={item.detail} />
                  ))}
>>>>>>> 619e8da (version 1.0)
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
          )}
        </div>
      </div>
    </div>
  );
}
