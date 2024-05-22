/* eslint-disable react/prop-types */
 
const Input = ({label,id,name,value,error,onChange}) => {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        <p className="error">{error}</p>
      </div>
  )
}

export default Input
