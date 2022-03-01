const FormTextInput = ({ value, label, handleChange, handleBlur, name }) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input
        type="text"
        className="form-input mt-1 block w-full"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
    </label>
  );
};

export default FormTextInput;
