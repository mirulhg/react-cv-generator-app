export default function Section({perusahaan, pekerjaan, tahun, detailPekerjaan}) {
    return <section className="job">
                    <div className="company">
                      {perusahaan} || {tahun}
                    </div>
                    <div className="role">{pekerjaan}</div>
                    <ul className="bullets">
                      <li>
                        {detailPekerjaan}
                      </li>
                    </ul>
                  </section>
}