import React from 'react';

export const ThumbImage = ({id, image, width, height}) => {
  const makeImageUrl = (id, image)=>{
    return `https://bookcha.s3.amazonaws.com/uploads/book/image/${id}/thumb_${image}`
  }
  return (
    <img alt="" slot="media" src={makeImageUrl(id, image)} width={width} height={height}/>
  )
}

export const FullImage = ({id, image}) => {
  const makeImageUrl = (id, image)=>{
    return `https://bookcha.s3.amazonaws.com/uploads/book/image/${id}/${image}`
  }
  return (
    <img alt="" slot="media" src={makeImageUrl(id, image)} />
  )
}
  