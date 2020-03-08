import React from 'react';
import { FontAwesomeIcon as FontAwesomeIconO } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components';

const FontAwesomeIcon = styled(FontAwesomeIconO)`
  font-size: 42px;
`
const StarContainer = styled.div`
  width: 100%;
`


class Star extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      rate: props.rate
    }
    this.onDrag = this.onDrag.bind(this);
  }

  onDrag(touch){
    // 아 좋은방법 없나요 .. ㅜㅜ .item-content padding-left = 16px
    // iten inner margin-left 16px
    // image 44px 
    this.setState({
      rate: Number.parseInt((touch.touches[0].pageX-(44+32))/21)/2
    })
  }
  
  getStarArr = ()=>{
    let result = [];
    let i = 1;
    for(;i<=this.state.rate*1;i++){
      result.push(faStar);
    }
    if(i-this.state.rate===0.5){
      result.push(faStarHalfAlt);
      i++
    }
    for(;i<=5;i++){
      result.push(faStarO)
    }
    return result;
  }

  render(){ 
    return (
    <StarContainer onTouchStart={this.onDrag} onTouchMove={this.onDrag}>
      {this.getStarArr().map((icon, index) => (
        <FontAwesomeIcon icon={icon} key={index}/>
      ))}
    </StarContainer>)
    }
  }

export default Star;