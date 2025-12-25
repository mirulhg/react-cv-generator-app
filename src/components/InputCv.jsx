import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import html2pdf from "html2pdf.js";

import HasilPdf from "./HasilPdf.jsx";

import Section from "./Section.jsx";
import Skills from "./Skills.jsx";
import Bahasa from "./Bahasa.jsx";
import Input from "./Input.jsx";

export default function InputCv() {
  const maxSize = 2 * 720 * 1080;

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
  const [pengalaman, setPengalaman] = useState({
    posisi: "",
    perusahaan: "",
    tahun: "",
    detail: "",
  });
  const [bahasa, setBahasa] = useState("");
  const [education, setEducation] = useState("");

  const [profileSummary, setProfileSummary] = useState("");

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

  function handleProfileSummary(event) {
    setProfileSummary(event.target.value);
  }

  const [skills, setSkills] = useState("");
  const [listSkills, setListSkills] = useState([]);

  function handleSkills(event) {
    setSkills(event.target.value);
  }

  function handleTambahSkills() {
    setListSkills((prev) => [...prev, skills]);
    setSkills("");
    toast.success("Berhasil Menambah Skills", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function handlePengalaman(event) {
    const { name, value } = event.target;
    setPengalaman((prev) => ({ ...prev, [name]: value }));
  }

  function handleTambahPengalaman() {
    if (
      pengalaman.posisi.trim() === "" ||
      pengalaman.perusahaan.trim() === "" ||
      pengalaman.tahun.trim() === "" ||
      pengalaman.detail.trim() === ""
    ) {
      toast.warn("ISI SEMUA FIELD!", {
        position: "top-center",
        hideProgressBar: false,
        autoClose: 5000,
        pauseOnHover: true,
        closeOnClick: false,
        progress: undefined,
        draggable: true,

        theme: "light",
      });
      return;
    }
    setListPengalaman((prev) => [...prev, pengalaman]);
    setPengalaman({
      posisi: "",
      perusahaan: "",
      tahun: "",
      detail: "",
    });

    toast.success("Berhasil Menambah Pengalaman", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const [listBahasa, setListBahasa] = useState([]);

  function handleBahasa(event) {
    setBahasa(event.target.value);
  }

  function handleTambahBahasa() {
    setListBahasa((prev) => [...prev, bahasa]);
    setBahasa("");
    toast.success("Berhasil Menambah Bahasa", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
      bahasa: listBahasa,
      education,
      profileSummary,
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
        detail: "",
      });
      setBahasa("");
      setEducation("");
      setProfileSummary("");

      // Hapus data yang sudah ditampilkan
      setSubmittedData(null);

      alert("Data CV berhasil di hapus");
    }
  }
  // fungsi save as PDF
  function handleSavePDF() {
    const element = printRef.current;
    const options = {
      margin: 1,
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 5 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orentiation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  }

  // styling
  const widthLabel = "min-w-15 text-slate-500";
  const inputStyled =
    "w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow max-w-2xl justify-items-start";

  const groupLabelInput = "flex items-center justify-between mb-4 gap-20";
  const buttonStyled =
    "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-lg";
  const sideButton = "flex flex-row content-center justify-end";

  return (
    <div className="max-w-[100] rounded overflow-hidden shadow-lg bg-linear-to-r from-teal-400 to-yellow-200">
      <div className="max-w-[100] rounded overflow-hidden shadow-lg p-20">
        <div className="flex flex-col p-5 min-w-20xl">
          <HasilPdf />
          <h2 className="text-5xl font-serif">InputCv</h2>
          {/* <div className={groupLabelInput}> */}
          {/* <label className={widthLabel}>Nama</label>
            <input
              className={inputStyled}
              type="text"
              name="nama"
              placeholder="masukkan nama"
              value={profile.nama}
              onChange={handleProfile}
            /> */}
          <Input
            nama="nama"
            type="text"
            placeHolder="masukan nama"
            value={profile.nama}
            onChange={handleProfile}
            label="Nama"
            widthLabel={widthLabel}
            groupLabelInput={groupLabelInput}
            setInputStyled={inputStyled}
          />
          {/* </div> */}
          <div className={groupLabelInput}>
            <label className={widthLabel}>Pekerjaan</label>
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
            <label className={widthLabel}>Email</label>
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
            <label className={widthLabel}>Telfon</label>
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
            <label className={widthLabel}>Lokasi</label>
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
            <label className={widthLabel}>Upload Image :</label>
            <input
              type="file"
              accept="image/"
              onChange={handleImage}
              className={buttonStyled}
            />
          </div>
          <div className={groupLabelInput}>
            <label className={widthLabel}>Profile Summary</label>
            <textarea
              className={inputStyled}
              name="profileSummary"
              value={profileSummary}
              placeholder="Jelaskan Tentang Anda Maksimal 200 Karakter"
              onChange={handleProfileSummary}
              maxLength={200}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col p-5 min-w-20xl">
          <div className={groupLabelInput}>
            <label className={widthLabel}>Skills</label>
            <input
              className={inputStyled}
              type="text"
              placeholder="Skills"
              name="skills"
              value={skills}
              onChange={handleSkills}
            />
          </div>
          <div className={sideButton}>
            <button onClick={handleTambahSkills} className={buttonStyled}>
              Tambah Skills
            </button>
          </div>
        </div>
        <div className="flex flex-col p-5 min-w-20xl">
          <label className={widthLabel}>Tambah Pengalaman</label>
          <div className={groupLabelInput}>
            <label className={widthLabel}>Posisi</label>
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
            <label className={widthLabel}>Perusahaan</label>
            <input
              className={inputStyled}
              type="text"
              name="perusahaan"
              value={pengalaman.perusahaan}
              onChange={handlePengalaman}
              placeholder="Nama perusahaan"
              onInput={(event) =>
                (event.target.value = event.target.value.toUpperCase())
              }
            />
          </div>
          <div className={groupLabelInput}>
            <label className={widthLabel}>Tahun</label>
            <input
              className={inputStyled}
              type="text"
              name="tahun"
              value={pengalaman.tahun}
              onChange={handlePengalaman}
              placeholder="Tahun bekerja"
            />
          </div>
          <div className={groupLabelInput}>
            <label className={widthLabel}>Detail Pekerjaan</label>
            <textarea
              className={inputStyled}
              type="text"
              name="detail"
              value={pengalaman.detail}
              onChange={handlePengalaman}
              maxLength={500}
              placeholder="Ceritakan Pengalaman Anda Bekerja Pada Perusahaan Maksimal 500 Karakter"
            />
          </div>
          <div className={sideButton}>
            <button onClick={handleTambahPengalaman} className={buttonStyled}>
              Tambah Pengalaman
            </button>
          </div>

          <div className="flex flex-col p-5 min-w-20xl">
            <div className={groupLabelInput}>
              <label className={widthLabel}>Bahasa</label>
              <input
                className={inputStyled}
                type="text"
                placeholder="Masukkan bahasa yang di kuasai"
                name="inggris"
                value={bahasa}
                onChange={handleBahasa}
              />
            </div>
          </div>
          <div className={sideButton}>
            <button onClick={handleTambahBahasa} className={buttonStyled}>
              Tambah Bahasa
            </button>
          </div>
          <div className="flex flex-col p-5 min-w-20xl">
            <div className={groupLabelInput}>
              <label className={widthLabel}>Education</label>
              <input
                className={inputStyled}
                type="text"
                placeholder="Pendidikan Terakhir"
                name="education"
                value={education}
                onChange={handleEducation}
                onInput={(event) =>
                  (event.target.value = event.target.value.toUpperCase())
                }
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
              <div className="flex">
                <p className="flex flex-col border-b-stone-700">
                  <label>Nama: {submittedData.profile.nama}</label>
                  <label>Pekerjaan: {submittedData.profile.pekerjaan}</label>
                  <label>Email: {submittedData.profile.email}</label>
                  <label>Nomor Telfon: {submittedData.profile.telfon}</label>
                  <label>Lokasi: {submittedData.profile.lokasi}</label>
                </p>
                <p className="flex flex-col border-b-stone-700">
                  <label>
                    Skills :{" "}
                    {submittedData.skills.length > 0
                      ? submittedData.skills.join(", ")
                      : "Belum Ada Skill"}
                  </label>
                  <label>Pengalaman :</label>
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
                  <label>
                    Bahasa :{" "}
                    {submittedData.bahasa.length > 0
                      ? submittedData.bahasa.join(", ")
                      : "Belum Ada Bahasa"}
                  </label>
                  <label>Education : {submittedData.education}</label>
                </p>
                <p className="flex flex-col border-b-stone-700">
                  <img src={preview} alt="Preview" />
                  <p>{submittedData.profileSummary}</p>
                </p>
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
                    <p className="profile">{submittedData.profileSummary}</p>
                  </div>
                  <div className="section">
                    <h3>SKILLS</h3>
                    <div className="divider"></div>
                    {listSkills.map((item, index) => (
                      <Skills
                        key={index}
                        className="skills-list"
                        kemampuan={item}
                      />
                    ))}
                  </div>
                  <div className="section">
                    <h3>LANGUAGES</h3>
                    <div className="divider"></div>
                    <ul className="lang-list">
                      {listBahasa.map((item, index) => (
                        <Bahasa key={index} bahasa={item} />
                      ))}
                    </ul>
                  </div>
                </aside>
                <main className="main">
                  <h2>PROFESSIONAL EXPERIENCE</h2>
                  {listPengalaman.map((item, index) => (
                    <Section
                      key={index}
                      className="job"
                      perusahaan={item.perusahaan}
                      pekerjaan={item.posisi}
                      tahun={item.tahun}
                      detailPekerjaan={item.detail}
                    />
                  ))}
                  <div className="education">
                    <h2>EDUCATION</h2>
                    <div className="edu-item">
                      <div className="degree">{submittedData.education}</div>
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
