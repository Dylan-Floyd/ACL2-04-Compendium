import React from 'react'

//This component can accept either an optionsList or optionsObject
//optionsList should be an array of strings,
//    if optionsList is provided, the option elements will have their value and label set to the string
//optionsObject should be an object with the properties representing the value and label,
//    if optionsObject is provided, the option elements will have their label set to the property key, and the value set to the property value
//    as in the object should be formatted like this:
//    optionsObject = {
//        MyOptionLabel: myOptionValue,
//        OptionTwoLabel: option2Value
//    }
export default function Select({
  label,
  selectedOption,
  optionsList,
  optionsObject,
  handleChange
}) {
  let optionEls = []
  if (Array.isArray(optionsList)) {
    optionEls = optionsList.map(option => <option value={option} key={option}>{option}</option>)
  } else if (optionsObject !== undefined) {
    optionEls = Object.entries(optionsObject).map(([uiLabel, apiValue]) => <option value={apiValue} key={apiValue}>{uiLabel}</option>)
  }
  
  return (
    <label>
      {label}
      <select value={selectedOption} onChange={e => handleChange(e.target.value)}>
        {optionEls}
      </select>
    </label>
  )
}
