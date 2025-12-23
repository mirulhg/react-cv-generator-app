export default function Input() {
    return <div className={groupLabelInput}>
            <label className={widthLabel}>Nama</label>
            <input
              className={inputStyled}
              type="text"
              name="nama"
              placeholder="masukkan nama"
              value={profile.nama}
              onChange={handleProfile}
            />
          </div>
}