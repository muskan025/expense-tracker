/* eslint-disable react/prop-types */
 
const Select = ({
  label,
  id,
  name,
  value,
  error,
  onChange,
  options,
  defaultOption,
   
}) => {


  return (
    
    <div className="input-container">
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option key={crypto.randomUUID()} hidden>
            {defaultOption}
          </option>
        )}

        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
     
  );
};

export default Select;
