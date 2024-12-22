

const Select = ({ options, name, text, handleOnChange, value }) => {
  return (
    <div className="d-flex flex-column mt-3">
      <label htmlFor={name}> {text}: </label>
      <select
        className="py-2 fst-italic opacity-75 "
        style={{ fontSize: '.8em' }}
        required
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option> Select some option </option>

        {options.map((option) => (
          <option
            className="py-2 fst-italic opacity-75 "
            style={{ fontSize: '.8em' }}
            required
            value={option.id}
            key={option.id}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
