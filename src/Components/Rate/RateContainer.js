import React, { useState } from "react";
import { Page, List, Block, BlockTitle, ListItem, f7 } from 'framework7-react';
import RatePresenter from "./RatePresenter";
import Loader from "../Loader";
import { useQuery } from "react-apollo-hooks";
import {
  ALL_BOOKS
} from "./RateQueries";

export default ( { categoryId }) => {
  const [items, setItems] = useState([1,2,3,4,5,6,7,8,9,19,11,12,13,14,15,16,17,18,19,20]);
  const [infiState, setInfiState] = useState(true);
  const [preloader, setPreloader] = useState(true);


  const { loading, error, data } = useQuery(ALL_BOOKS, {
    variables: {
      categoryId: categoryId,
      afterId: null
    }
  })

  const infiHandler = (e) => {
    console.log(e)
  }
  

  const loadMore = () => {
    if (!infiState) return;
    
    setInfiState(false);

    setTimeout(() => {
      if (items.length >= 200) {
        setPreloader(false);
        return;
      }
      const itemsLength = items.length;
      let newItems = [];
      for (let i = 1; i <= 20; i += 1) {
        newItems.push(itemsLength+i)
      }
      setItems(items.push(newItems));
      setInfiState(true);
    }, 500)
  };

  return (
      <Page className="page-rating" infinite onInfinite={loadMore} infiniteDistance={50} infinitePreloader={preloader} >
          <BlockTitle medium className="searchbar-found">Components</BlockTitle>
          <Block>
          <List medial-list className="rate-list">
            {loading && <Loader/>}
            {!loading &&
              data &&
              data.allBooks &&
              data.allBooks.map(book => (
                <RatePresenter author={book.author} title={book.title} id={book.id} key={book.id}/>
              ))
            }
            
          </List>
          <List>
          {items.map((item, index) => (
            <ListItem title={`Item ${item}`} key={index}></ListItem>
          ))}
        </List>

        </Block>
      </Page>
    )
};
    


