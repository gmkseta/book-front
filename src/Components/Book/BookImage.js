import React, { useState } from 'react';
import styled from 'styled-components';


export const thumbImage = ({id, image}) => {
  const makeImageUrl = (id, image)=>{
    return `https://bookcha.s3.amazonaws.com/uploads/book/image/${id}/thumb_${image}`
  }
  return (
    <img alt="" slot="media" src={makeImageUrl(id, image)}/>
  )
}

export const fullImage = ({id, image}) => {
  const makeImageUrl = (id, image)=>{
    return `https://bookcha.s3.amazonaws.com/uploads/book/image/${id}/${image}`
  }
  return (
    <img alt="" slot="media" src={makeImageUrl(id, image)}/>
  )
}
  