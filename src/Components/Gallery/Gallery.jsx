import React from 'react'
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

import './Gallery.css'

export default function Gallery({ galleryItems }) {
  console.log(galleryItems)
  return (
    <div className='gallery'>
      { galleryItems.map(item => <GalleryItem item={item} key={item.id} />) }
    </div>
  )
}
