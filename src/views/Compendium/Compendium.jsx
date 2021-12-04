import { useEffect, useState } from 'react'
import Gallery from '../../Components/Gallery/Gallery.jsx'
import Search from '../../Components/Search/Search.jsx'
import Select from '../../Components/Select/Select.jsx'
import SortBy from '../../Components/SortBy/SortBy.jsx'
import SortOrder from '../../Components/SortOrder/SortOrder.jsx'
import {
  getPokemon,
  getPokemonTypes,
  searchPokemon
} from '../../services/pokedexApi.js'

import './Compendium.css'

export default function Compendium() {
  const [searchTerm, setSearchTerm] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState(['Any'])
  const [selectedType, setSelectedType] = useState('Any')
  const [sortOrder, setSortOrder] = useState('↑')
  const [sortBy, setSortBy] = useState('pokemon')

  useEffect(() => {
    (async () => {
      setLoading(true)
      let pokemon = await getPokemon()
      setPokemon(pokemon)
      let gottenTypes = await getPokemonTypes()
      setTypes(gottenTypes)
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    doSearch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, sortOrder, sortBy])

  async function doSearch() {
    setLoading(true)
    let isAsc = sortOrder === '↑'
    let pokemon = await searchPokemon(searchTerm, isAsc, selectedType)
    setPokemon(pokemon)
    setLoading(false)
  }

  async function handleTypeChange(newType) {
    setSelectedType(newType)
  }

  async function handleSortOrderChange(newOrder) {
    setSortOrder(newOrder)
  }

  async function handleSortByChange(newSortBy) {
    setSortBy(newSortBy)
  }

  return (
    <div className="compendium">
      <div className='header'>
        <h2>Pokedex</h2>
        <div className='inputs'>
          <Search {...{
            searchTerm,
            setSearchTerm,
            doSearch
          }} />

          <Select
            label='Select a Type: '
            selectedOption={selectedType}
            optionsList={types}
            handleChange={handleTypeChange}
          />

          <SortBy
            selectedOption={sortBy}
            handleChange={handleSortByChange}
          />

          <SortOrder
            selectedOrder={sortOrder}
            handleChange={handleSortOrderChange}
          />
        </div>
      </div>
      {
        loading ? 'loading...' : <Gallery galleryItems={pokemon} />
      }
    </div>
  )
}
