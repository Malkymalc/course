import React from 'react';
import './imageList.css'
import ImageCard from './ImageCard.js'


const ImageList = (props) => {

  const images = props.images.map(image => {
    return <ImageCard image={image} key={image.id}/>;
  })

  return (
    <div className='image_list'>
      {images}
    </div>
  );

}

export default ImageList;
