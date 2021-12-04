export async function getPokemon() {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex`
  )
  let data = await res.json()
  return data.results
}

export async function getPokemonTypes() {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/types`
  )
  let data = await res.json()
  return ['Any', ...data.map(typeObj => typeObj.type).slice(0, 5)]
}

export async function searchPokemon(name, sortOrderIsAsc, type) {
  let sortOrder = sortOrderIsAsc ? 'asc' : 'desc'
  let typeQuery = type === 'Any' ? '' : `&type=${type}`
  let query = `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${name}&sort=pokemon&direction=${sortOrder}${typeQuery}`
  const res = await fetch(query)
  let data = await res.json()
  return data.results
}