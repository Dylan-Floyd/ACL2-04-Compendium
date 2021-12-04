import React from 'react'
import Select from '../Select/Select.jsx'

export default function SortOrder({
  selectedOrder,
  handleChange
}) {
  return (
    <Select label='Sort Order: ' optionsList={['↑', '↓']} selectedOption={selectedOrder} handleChange={handleChange} />
  )
}
