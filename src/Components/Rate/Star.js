import React from 'react';
import { FontAwesomeIcon as FontAwesomeIconO } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components';

const FontAwesomeIcon = styled(FontAwesomeIconO)`
  font-size: 2em;
`
const StarContainer = styled.div`
  width: 100%;
`


export default ({rate})=> {

  const getStarArr = ()=>{
    let result = [];
    let i = 1;
    for(;i<=rate*1;i++){
      result.push(faStar);
    } 
    if(i-rate===0.5){
      result.push(faStarHalfAlt);
      i++
    }
    for(;i<=5;i++){
      result.push(faStarO)
    }
    return result;
  }

  return   (
    <StarContainer>
      {getStarArr().map((icon, index) => (
        <FontAwesomeIcon icon={icon} key={index}/>
      ))}
    </StarContainer>)
}
