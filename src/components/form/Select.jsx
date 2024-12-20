const Select = ({ name, text}) => {
  return (
    <div className="d-flex flex-column mt-3">
      <label htmlFor={name}> {text}: </label>
      <select
        className="py-2 fst-italic opacity-75 "
        style={{ fontSize: '.8em' }}
        required
        name={name}
      >
        <option> Select some option </option>
      </select>
    </div>
  )
}

export default Select
