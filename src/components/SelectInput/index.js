import React from 'react'

const SelectInput = ({ value, handleChange, options }) => (
  <select
    value={value}
    onChange={handleChange}
  >
    {options.map(p => (
      <option
        value={p.value}
        key={p.value}
      >
        {p.label}
      </option>
    ))}
  </select>
)

export default SelectInput
