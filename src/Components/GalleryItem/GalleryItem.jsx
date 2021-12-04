import { namifyString } from '../../utils/utils.js'

import './GalleryItem.css'

export default function GalleryItem({ item }) {
  return (
    <div className='cardBorder'>
      <div className={`pokeItem cloudBG ${item.type_1}`}>
        <div className='topInfo'>
          <span className='name'>{namifyString(item.pokemon)}</span>
          <span className='hp'>{item.hp + 'HP'}</span>
        </div>
        <div className='imageBorder'>
          <div className='imageBG'>
            <img src={item.url_image} alt={item.pokemon} className='pokeImage' />
          </div>
        </div>
        <div className='bottomInfo'>
          {namifyString(item.type_1)} Pokemon. Length {item.height}, Weight: {item.weight} lbs.
        </div>
        <ul className='infoList'>
          <li>Type: {namifyString(item.type_1)}</li>
          <li>Speed: {item.speed}</li>
          <li>Ability 1: {namifyString(item.ability_1)}</li>
          <li>Base Pokemon: {namifyString(item.pokebase)}</li>
        </ul>
      </div>
    </div>
  )
}