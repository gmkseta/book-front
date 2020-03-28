import React from "react";
import { BlockTitle, Card, CardFooter, CardContent } from "framework7-react"



export default (
  {data}
) => {
  console.log(data)
  
  return (
    <>
    <BlockTitle>{data.id}</BlockTitle>
    <Card className="book-card">
      <CardContent padding={false} className="book-container">
        <div className="book-content">
          <div className="book-img">
            <img alt="" slot="media" src="http://image.yes24.com/momo/TopCate1122/MidCate003/112127301.jpg" />
          </div>
        </div>
      </CardContent>
    </Card>
    </>
      
    
  );
}

