const FormCheckboxInput = ({ value, label, handleChange, handleBlur }) => {
  return (
    <label className="inline-flex items-center">
      <input className="form-checkbox" type="checkbox" checked={value} />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default FormCheckboxInput;
