import React from 'react'

import './Search.css'

export default function Search({
  searchTerm,
  setSearchTerm,
  doSearch
}) {
  return (
    <div className='search-div'>
      <label>
        Search by Name:
        <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </label>
      <button onClick={doSearch}>Search</button>
    </div>
  )
}
