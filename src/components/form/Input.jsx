const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <div className="d-flex flex-column">
      <label htmlFor={name} className="py-2">
        {text}:
      </label>
      <input
        className="p-1 fst-italic"
        style={{ fontSize: '.8em' }}
        required
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  )
}

export default Input
