import React from "react";
import { BlockTitle ,Card, CardHeader, ListItem, CardFooter, Link, CardContent} from "framework7-react"
import RadarChart from 'react-svg-radar-chart';

export default () => {
  const data = [
    {
     "data": {
      "battery": 0.4,
      "design": 0.1,
      "useful": 0.7,
      "speed": 0.6,
      "weight": 0.7
     },
     "meta": {
      "color": "rgba(255,0,0,0.7)"
     }
    }
   ]

const captions = {
    // columns
    battery: '평점',
    design: '댓글 수',
    useful: '판매량',
    speed: '작가평',
    weight: 'Weight'
  };
  const options = {
    scaleProps: () => ({
      fill: 'rgba(123,0,0,0.2)',
      stroke: '#000',
      strokeWidth: '.2'
      }),
      axisProps: () => (
      { 
        stroke: '#000',
        strokeWidth: '.2'
      })
    }
  return (
    <>
      <BlockTitle>공리주의</BlockTitle>
      <Card>
        <CardContent padding={false} className="book-container">
          <div className="book-content">
            <div className="book-img">
              <img slot="media" src="http://image.yes24.com/momo/TopCate1122/MidCate003/112127301.jpg"/>
            </div>
            <div className="book-inner">
              <RadarChart
                captions={captions}
                data={data}
                size={150}
                options={options}
              />
            </div>
          </div>
          <CardFooter>
            <span>뭐시기~</span>
            <span>5 comments</span>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}
