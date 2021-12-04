import React from 'react'
import Select from '../Select/Select.jsx'
import sortByOptions from './sortByOptions.js'

export default function SortBy({
  selectedOption,
  handleChange
}) {
  return (
    <Select
      label='Sort By: '
      selectedOption={selectedOption}
      optionsObject={sortByOptions}
      handleChange={handleChange}
    />
  )
}
