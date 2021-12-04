import { render } from '@testing-library/react'
import GalleryItem from './GalleryItem.jsx'

it('Should render a pokemon', () => {
  const { container } = render(<GalleryItem item={
    {
      type_1: 'grass',
      pokemon: 'bob',
      hp: 3,
      url_image: 'wow',
      height: 3,
      weight: 3,
      speed: 3,
      ability_1: 'wilson wow',
      pokebase: 'asdf'
    }
  } />)

  expect(container).toMatchSnapshot()
})