export default function Input({
  onChange,
  inputStyled,
  placeHolder,
  value,
  groupLabelInput,
  widthLabel,
  label,
  setInputStyled,
  type,
  nama,
}) {
  return (
    <div className={groupLabelInput}>
      <label className={widthLabel}>{label}</label>
      <input
        className={setInputStyled}
        type={type}
        name={nama}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
